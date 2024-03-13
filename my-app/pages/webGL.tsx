import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* In your CSS file */
const canvasStyle = {
  display: 'flex',
  width: '100%', 
  height: '100vh',
  // align-items: 'center',
  // justify-content: 'center',
  transform: 'scale(0.5)',
};

const App = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('lightblue'); // Set background color

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75, // FOV
      canvas.width / canvas.height, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );
    camera.position.z = 5; 

    // Geometry (Box)
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Material 
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red

    // Mesh (Combine geometry + material)
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div style={canvasStyle}>
      <canvas ref={canvasRef} /> 
    </div>
  );
};

export default App;
