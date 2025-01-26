import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

const BackgroundRays = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <spline-viewer url="https://prod.spline.design/f-ksMRQyY1d9-InH/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default BackgroundRays;
