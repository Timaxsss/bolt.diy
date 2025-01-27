import { useEffect } from 'react';
import styles from './styles.module.scss';

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
    <div className={styles.container}>
      <spline-viewer url="https://prod.spline.design/MvI-htjSeK3vWt9N/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default BackgroundRays;
