import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const Weather = () => {
  const [weather, setWeather] = useState(false);
  const [machine, setMachine] = useState('1');
  const [light, setLight] = useState('0');

  const causeBadWeather = () => {
    setWeather(true);
  };

  useEffect(() => {
    if (weather === true) {
      setLight('1');
      const timer = setTimeout(() => {
        setMachine('0');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [weather]);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar />
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title}>Space Weather</p>
            <p>
              Space weather results from the sun. It is related to all solar activity, including solar wind, sunspots,
              and solar flares. Most important of all, space weather may have a significant impact on earth. Just like
              our daily weather on earth, there is good and bad space weather. When solar activities are relatively
              calm, we say that is ‘good space weather’. Conversely, ‘bad space weather’ occurs when solar activities
              are quite active. Sometimes, bad space weather even interferes with communications, GPS, and power systems
              on earth. In addition, the operation of satellites and spacecraft may also be affected.
            </p>
          </div>
          <div className={styles.picContainerRight} style={{ width: '30%', height: '70%' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title} style={{ width: '600px' }}>
              Bad Space Weather
            </p>
          </div>
          <div class={styles.weatherResultPic} style={{ width: '70%', height: '70%' }}>
            <Image
              alt=""
              src="/assets/bad_weather_result.png"
              layout="fill"
              objectFit="contain"
              style={{ opacity: machine }}
            />
          </div>
          <div class={styles.lightPic} style={{ width: '45%', height: '45%' }}>
            <Image alt="" src="/assets/light.png" layout="fill" objectFit="contain" style={{ opacity: light }} />
          </div>
          <div className={styles.badWeatherPic} style={{ width: '20%', height: '50%' }}>
            <Image alt="" src="/assets/sun.png" layout="fill" objectFit="contain" onClick={() => causeBadWeather()} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Weather;
