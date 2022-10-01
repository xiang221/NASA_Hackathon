import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Image from 'next/image';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const Parker = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar />
        <div className={styles.contentContainer}>
          <div className={styles.satellitePic} style={{ width: '10%', height: '10%' }}>
            <Image alt="" src="/assets/satellite.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.picContainerLeft} style={{ width: '40%', height: '80%' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerRight}>
            <p className={styles.title}>Parker Solar Probe</p>
            <p>
              Parker Solar Probe is an unmanned spacecraft launched by NASA in 2018, whose mission is to repeatedly
              probe and observe the sun&apos;s outer corona.
            </p>
          </div>
          <div className={styles.picContainerRight} style={{ width: '26%', height: '26%', top: '500px' }}>
            <Image alt="" src="/assets/real_satellite.png" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.picContainerLeft} style={{ width: '40%', height: '80%' }}>
            <Image alt="" src="/assets/parker.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerRight}>
            <p className={styles.title}>The orbit of the Parker Solar Probe</p>
            <p>
              The Parker Solar Probe mission repeatedly used Venus gravitational boost to gradually reduce the
              perihelion of its orbit to a final distance of 8.5 solar radii from the sun&apos;s surface.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Parker;
