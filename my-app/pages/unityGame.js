import React, { useEffect, useRef } from 'react';
import UnityLoader from '../public/unity-build/Build/UnityLoader.js'; // Adjust path as needed


function UnityGamePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const unityInstance = UnityLoader.instantiate(canvasRef.current, '/unity-build/Build/my-unity-game.json');

    // Example - Fullscreen function
    const handleFullscreen = () => unityInstance.SetFullscreen(1);
    document.addEventListener('click', handleFullscreen);

    return () => {
      unityInstance.Quit();
      document.removeEventListener('click', handleFullscreen);
    };
  }, []);

  return (
    <div>
      <h1>My Unity Game</h1>
      <canvas ref={canvasRef} width="800" height="600"></canvas>
    </div>
  );
}

export default UnityGamePage;
