import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Chart from '../components/Chart';
import Bar from '../components/Bar';

const Solar = () => {
  const [control, changeControl] = useState(false);
  const [opacity, setOpacity] = useState('0.5');
  const clickOn = (control) => {
    changeControl(control);
    if (control == true) {
      setOpacity('1');
    } else {
      setOpacity('0.5');
    }
  };

  useEffect(() => {}, [opacity]);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar top="800px" />
        <Bar top="2300px" />
        <div className={styles.contentContainer}>
          <div className={styles.solorWindPic} style={{ width: '30%', height: '70%' }}>
            <Image alt="" src="/assets/helf_sun.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.solorWindPic} style={{ width: '80%', height: '70%', left: '20%' }}>
            <Image alt="" src="/assets/solar_pic.png" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.elementPic} style={{ width: '40%', height: '70%' }}>
            <Image alt="" src="/assets/solar_pic_2.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerRight}>
            <p className={styles.title}>Solar wind</p>
            <p>
              The solar wind refers specifically to the ultra-fast flow of plasma emanating from the upper atmosphere of
              the Sun. At the high temperature of the sun&apos;s corona, atoms such as hydrogen and helium are ionized
              into positively charged protons, helium nuclei, and negatively charged free electrons. The motion of these
              charged particles and their high speed shoot towards the outer periphery of the sun, forming the solar
              wind.
            </p>
          </div>
        </div>
        <div className={styles.contentContainer} style={{ height: '500px' }}>
          <div className={styles.picContainerRight} style={{ width: '40%', height: '70%' }}>
            <Image alt="" src="/assets/earth_line.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title}>Protect our Earth&apos;s magnetic field</p>
            <p>
              The Earth&apos;s magnetic field acts like an invisible giant shield, keeping particles from the sun out of
              space, allowing them to bypass the Earth and prevent terrestrial life from being harmed.
            </p>
          </div>
        </div>
        <div className={styles.contentContainer} style={{ marginTop: '0' }}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title} style={{ width: '1000px' }}>
              Protect our Earth&apos;s magnetic field
            </p>
            <Chart />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.paragraphContainerLeft}>
            <p className={styles.title} style={{ width: '1000px' }}>
              Connect Arduino to control our hardware device
            </p>
          </div>
          <div className={styles.picOnBtn} style={{ width: '20%', height: '40%' }}>
            {control === true && (
              <Image alt="" src="/assets/on.png" layout="fill" objectFit="contain" onClick={() => clickOn(!control)} />
            )}
            {control === false && (
              <Image alt="" src="/assets/off.png" layout="fill" objectFit="contain" onClick={() => clickOn(!control)} />
            )}
          </div>
          <div className={styles.picOnBtn} style={{ width: '20%', height: '40%', top: '250px' }}></div>
          <div
            className={styles.picContainerRight}
            style={{ width: '30%', height: '50%', top: '230px', opacity: opacity }}
          >
            <Image alt="" src="/assets/arduino.png" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solar;
