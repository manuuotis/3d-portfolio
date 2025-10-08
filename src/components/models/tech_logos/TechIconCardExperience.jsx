import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const scene = useGLTF(model.modelPath);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Optimize canvas settings based on device
  const canvasSettings = useMemo(() => ({
    gl: {
      antialias: false, // Disable for better performance
      powerPreference: isMobile ? "default" : "high-performance",
      alpha: true,
    },
    dpr: isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5), // Lower on mobile
  }), [isMobile]);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);

  return (
    <div ref={elementRef} style={{ width: '100%', height: '100%', pointerEvents: isMobile ? 'none' : 'auto' }}>
      {/* Only render Canvas when in viewport */}
      {isIntersecting && (
        <Canvas {...canvasSettings} style={{ pointerEvents: isMobile ? 'none' : 'auto' }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      {/* 
        The Float component from @react-three/drei is used to 
        create a simple animation of the model floating in space.
        The rotationIntensity and floatIntensity props control the
        speed of the rotation and float animations respectively.

        The group component is used to scale and rotate the model.
        The rotation is set to the value of the model.rotation property,
        which is an array of three values representing the rotation in
        degrees around the x, y and z axes respectively.

        The primitive component is used to render the 3D model.
        The object prop is set to the scene object returned by the
        useGLTF hook, which is an instance of THREE.Group. The
        THREE.Group object contains all the objects (meshes, lights, etc)
        that make up the 3D model.
      */}
      <Float speed={isMobile ? 3 : 5.5} rotationIntensity={isMobile ? 0.3 : 0.5} floatIntensity={isMobile ? 0.5 : 0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

          {/* Disable OrbitControls on mobile to prevent blocking scroll */}
          {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
        </Canvas>
      )}
    </div>
  );
};

export default TechIconCardExperience;
