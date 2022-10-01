import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Page.module.css';
import Bar from '../components/Bar';

const Solar = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <Bar top={'900px'} />
        <Bar top={'1900px'} />
        <div className={styles.contentContainer}>
          <div className={styles.solorWindPic} style={{ width: '30%', height: '90%' }}>
            <Image alt="" src="/assets/helf_sun.png" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.solorWindPic} style={{ width: '80%', height: '70%', left: '15%' }}>
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
          <div className={styles.picContainerRight} style={{ width: '30%', height: '50%' }}>
            <Image alt="" src="/assets/earth_line.png" layout="fill" objectFit="cover" />
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
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.main}>
    //     <Header/>
    //     <div className={styles.contentContainer}>
    //       <div className={styles.picContainerLeft}>
    //       <Image src="/assets/sun.png" alt="pic" width={400} height={400}/>
    //       <Image src="/assets/solar_pic.png" alt="pic" width={1000} height={450}/>
    //       </div>
    //     </div>
    //     <div className={styles.contentContainer}>
    //       <div className={styles.paragraphContainerRight}>
    //       <p className={styles.title}>Solar wind</p>
    //       <p>The solar wind refers specifically to the ultra-fast flow of plasma emanating from the upper atmosphere of the Sun. At the high temperature of the sun's corona, atoms such as hydrogen and helium are ionized into positively charged protons, helium nuclei, and negatively charged free electrons. The motion of these charged particles and their high speed shoot towards the outer periphery of the sun, forming the solar wind.</p>
    //       </div>
    //       <div className={styles.picContainerLeft}>
    //       <Image src="/assets/solar_pic_2.png" alt="pic" width={500} height={280}/>
    //       </div>
    //     </div>
    //     <div className={styles.contentContainer}>
    //       <div className={styles.paragraphContainerLeft}>
    //       <p className={styles.title}>Protect our Earth's magnetic field</p>
    //       <p>The Earth's magnetic field acts like an invisible giant shield, keeping particles from the sun out of space, allowing them to bypass the Earth and prevent terrestrial life from being harmed.</p>
    //       </div>
    //       <div className={styles.picContainerRight}>
    //       <Image src="/assets/earth_line.png" alt="pic" width={700} height={300}/>
    //       </div>
    //     </div>
    // </div>
  );
};

export default Solar;
