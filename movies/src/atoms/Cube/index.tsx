import React from 'react';
import styles from './styles.module.scss';
import IMAGES from '../../assets/images';

const Cube = (): any => {
  return (
    // <!-- 3D transform -->
    <div className={styles.new}>
      <div className={styles.cube}>
        <div className={`${styles.sketch} ${styles.fronts}`}>
          <a href="#">
            <h3></h3>
          </a>
        </div>
        <div className={`${styles.sketch} ${styles.backk}`}>
          <a href="#">
            <h3></h3>
          </a>
        </div>
        <div
          className={`${styles.sketch} ${styles.right}`}
          // style={{ backgroundImage: `url(${IMAGES.astral})` }}
          // @ts-ignore
          // style={{ backgroundImage: IMAGES.astral }}
        >
          {/* @ts-ignore*/}
          <img src={IMAGES.astral} alt="astral" />
        </div>
        <div className={`${styles.sketch} ${styles.left}`}>
          <a href="#">
            <h3></h3>
          </a>
        </div>
        <div className={`${styles.sketch} ${styles.top}`}>
          <a href="#">
            <h3></h3>
          </a>
        </div>
        <div className={`${styles.sketch} ${styles.bottom}`}>
          <a href="#">
            <h3></h3>
          </a>
        </div>
      </div>
    </div>
    // <!-- 3D transform -->
  );
};

export default Cube;
