import styles from './styles.module.scss';
import Script from 'next/script';

const BackgroundRays = () => {
  return (
    <div className={`${styles.rayContainer}`}>
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js" strategy="beforeInteractive" />
      <spline-viewer url="https://prod.spline.design/f-ksMRQyY1d9-InH/scene.splinecode" />
    </div>
  );
};

export default BackgroundRays;
