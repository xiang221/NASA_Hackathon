import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const weather = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar />
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title}>Space Weather</p>
            <p>
              Space weather originates from the sun, and it generally refers to all solar activity, including sunspots
              and solar flares, and its effects on Earth. These activities are constantly changing, sometimes strong and
              sometimes weak. &ldquo;Good weather&ldquo; is when solar activity is calm; &ldquo;bad weather&ldquo; is
              when solar activity is high and may affect communications, navigation and power systems on Earth, as well
              as the operation of satellites or spacecraft.
            </p>
          </div>
          <div className={styles.picContainerRight} style={{ width: '30%', height: '70%' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title}>Bad Space Weather</p>
          </div>
          <div class={styles.weatherResultPic} style={{ width: '70%', height: '70%' }}>
            <Image alt="" src="/assets/bad_weather_result.png" layout="fill" objectFit="contain" />
          </div>
          <div class={styles.lightPic} style={{ width: '45%', height: '45%' }}>
            <Image alt="" src="/assets/light.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.badWeatherPic} style={{ width: '20%', height: '50%' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default weather;
