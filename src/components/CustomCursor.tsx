import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { MousePointer } from 'lucide-react';

interface Ripple {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  scale: number;
  opacity: number;
}

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Orthographic Camera for exact 2D-to-3D screen space alignment
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Cursor Objects
    const cursorGroup = new THREE.Group();
    scene.add(cursorGroup);

    // Outer 3D Torus Ring
    const ringGeo = new THREE.TorusGeometry(16, 1.2, 16, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x2e5bff,
      transparent: true,
      opacity: 0.65,
      wireframe: false,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    cursorGroup.add(ringMesh);

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(4, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x2e5bff,
      transparent: true,
      opacity: 0.9,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    cursorGroup.add(coreMesh);

    // Light point on cursor
    const pointLight = new THREE.PointLight(0x2e5bff, 2, 200);
    cursorGroup.add(pointLight);

    // Array to store click ripples
    const ripples: Ripple[] = [];

    // Mouse tracking & smooth lerp targets
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    let isHovered = false;
    let hoverScale = 1;
    let targetHoverScale = 1;

    let isMouseDown = false;

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY; // Direct 1:1 alignment with top-left screen coordinates

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button, a, input, textarea, select, [role="button"], .glass-card, .cursor-pointer') !== null)
      ) {
        isHovered = true;
        targetHoverScale = 1.8;
      } else {
        isHovered = false;
        targetHoverScale = 1.0;
      }
    };

    // Click / MouseDown event for shockwave ripple
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;

      // Spawn 3D Ripple Ring
      const ripGeo = new THREE.RingGeometry(4, 8, 32);
      const ripMat = new THREE.MeshBasicMaterial({
        color: 0x2e5bff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const ripMesh = new THREE.Mesh(ripGeo, ripMat);
      ripMesh.position.set(currentX, currentY, 0);
      scene.add(ripMesh);

      ripples.push({
        mesh: ripMesh,
        material: ripMat,
        scale: 1,
        opacity: 0.85,
      });
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.left = 0;
      camera.right = width;
      camera.top = 0;
      camera.bottom = height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth position lerp (Damping factor 0.22)
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      cursorGroup.position.set(currentX, currentY, 0);

      // Smooth hover scaling transition
      hoverScale += (targetHoverScale - hoverScale) * 0.15;
      const clickCompress = isMouseDown ? 0.75 : 1.0;

      ringMesh.scale.set(hoverScale * clickCompress, hoverScale * clickCompress, hoverScale * clickCompress);
      coreMesh.scale.set(
        (isHovered ? 1.4 : 1.0) * clickCompress,
        (isHovered ? 1.4 : 1.0) * clickCompress,
        (isHovered ? 1.4 : 1.0) * clickCompress
      );

      // 3D Rotations
      ringMesh.rotation.x += isHovered ? 0.05 : 0.02;
      ringMesh.rotation.y += isHovered ? 0.04 : 0.015;
      coreMesh.rotation.z -= 0.03;
      coreMesh.rotation.y += 0.02;

      // Color intensity change on hover
      if (isHovered) {
        ringMat.opacity = 0.85;
        ringMat.color.setHex(0x2e5bff);
      } else {
        ringMat.opacity = 0.55;
      }

      // Update and animate click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.scale += 1.8;
        r.opacity -= 0.035;

        r.mesh.scale.set(r.scale, r.scale, 1);
        r.material.opacity = Math.max(0, r.opacity);

        if (r.opacity <= 0) {
          scene.remove(r.mesh);
          r.mesh.geometry.dispose();
          r.material.dispose();
          ripples.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Cleanup
      ringGeo.dispose();
      ringMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ripples.forEach((r) => {
        scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.material.dispose();
      });
      renderer.dispose();
    };
  }, [enabled]);

  return (
    <>
      {/* Floating Cursor Toggle Button */}
      <button
        onClick={() => setEnabled(!enabled)}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2 bg-white/90 backdrop-blur-md border border-slate-200 text-[#0f172a] rounded-full text-xs font-mono font-semibold shadow-lg hover:border-[#2e5bff] transition-all flex items-center gap-2 cursor-pointer"
        title="Toggle 3D interactive cursor"
      >
        <MousePointer className={`w-3.5 h-3.5 ${enabled ? 'text-[#2e5bff]' : 'text-slate-400'}`} />
        <span>
          3D Cursor:{' '}
          <strong className={enabled ? 'text-[#2e5bff]' : 'text-slate-500'}>
            {enabled ? 'ON' : 'OFF'}
          </strong>
        </span>
      </button>

      {/* Render 3D Canvas Overlay if enabled */}
      {enabled && (
        <div
          ref={containerRef}
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        />
      )}
    </>
  );
};

