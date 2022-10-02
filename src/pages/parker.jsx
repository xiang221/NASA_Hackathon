import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Image from 'next/image';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const parker = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar />
        <div className={styles.contentContainer}>
          <div className={styles.satellitePic} style={{ width: '10%', height: '10%' }}>
            <Image alt="" src="/assets/satellite.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.picContainerLeft} style={{ width: '30%', height: '70%', top: '150px' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerRight}>
            <p className={styles.title}>Parker Solar Probe</p>
            <p>
              The Parker Solar Probe was launched by NASA on 12th August, 2018. It was the first spacecraft to travel
              through the outer corona of the sun and touches it. The mission of the probe is to approach the sun to
              observe young, pristine solar wind and the unexplored solar environment inside the corona.
            </p>
          </div>
          <div className={styles.picContainerRight} style={{ width: '20%', height: '20%', top: '550px', left: '59%' }}>
            <Image alt="" src="/assets/real_satellite.png" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.picContainerLeft} style={{ width: '40%', height: '80%' }}>
            <Image alt="" src="/assets/parker.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerRight}>
            <p className={styles.title}>Orbit of the Parker Solar Probe</p>
            <p>
              The Parker Solar Probe is going to orbit the sun twenty-four times in a highly-elliptical orbit. With the
              assistance of the gravity of Venus, the probe can get closer to the Sun by reducing its perihelion, the
              point on its orbit that is closest to the Sun. The final altitude will be 8.5 solar radii above the
              surface.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default parker;
