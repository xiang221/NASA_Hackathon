import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Image from 'next/image';
import Footer from '../components/Footer';

const info = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.aboutPage}>
        <div className={styles.paragraphContainer}>
          <p className={styles.title} style={{ width: '1000px' }}>
            What exactly does PerSPective do?
          </p>
          <p>
            The goal of PerSPective is to let people learn how and why NASA explores the Sun and its effect on the Earth
            in an easier way. PerSPective includes three parts:
          </p>
          <br />
          <p>
            1.PerSPective provides people with easy access to information about the solar system, including the
            importance of the Parker Solar Probe, Space weather, Solar wind, and their influence. <br />
          </p>
          <br />
          <p>
            2.PerSPective shows ACE real-time data of Solar wind clearly. People can save time searching for data.{' '}
            <br />
          </p>
          <br />
          <p>
            3.Connecting the website with the firmware, PerSPective visualizes Solar wind by using iron powders and
            water flow . Iron powders stand for charged particles while water flow stands for Solar wind.PerSPective
            enables people to imagine real-time data easily in a fun and interactive way.
            <br />
          </p>
        </div>
        <div className={styles.picContainerRight} style={{ width: '40%', height: '40%', top: '300px' }}>
          <Image alt="" src="/assets/earth.png" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.memberContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainer}>
            <p className={styles.title} style={{ width: '1000px' }}>
              PerSPective Team
            </p>
          </div>
          <div style={{ width: '50%', height: '70%' }}>
            <Image alt="" src="/assets/member.png" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default info;
