import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const App = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    // Only initialize Three.js and set initial size if we're in the browser
    if (typeof window !== 'undefined') { 
      const renderer = new THREE.WebGLRenderer({ canvas });

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // ... rest of your Three.js code

      // Function to handle resizing:
      const handleResize = () => {
        if (renderer && camera) {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
      };

      // Add event listener for resizing 
      window.addEventListener('resize', handleResize);

      // Call handleResize initially
      handleResize(); 

      // Cleanup listeners on unmount
      return () => {
        renderer.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} /> {/* No initial width/height */}
    </div>
  );
};

export default App;
