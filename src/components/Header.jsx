import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './component.module.css';

const Header = (props = 'main') => {
  const router = useRouter();
  let img;
  props.type == 'index' ? (img = '/assets/logo_white.png') : (img = '/assets/logo_yellow.png');
  console.log(router.pathname);

  return (
    <div className={styles.headerContainer}>
      <Image src={img} alt="gift_pic" width={150} height={50} />
      {props.type == 'index' ? (
        ''
      ) : (
        <div className={styles.navBarContainer}>
          <button type="button" className={styles.navBar} onClick={() => router.push('/Weather')}>
            Space Weather
          </button>
          <button type="button" className={styles.navBar} onClick={() => router.push('/Solar')}>
            Solar Wind
          </button>
          <button type="button" className={styles.navBar} onClick={() => router.push('/Parker')}>
            Parker Solar Probeher
          </button>
          <button type="button" className={styles.navBar} onClick={() => router.push('/About')}>
            About
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
