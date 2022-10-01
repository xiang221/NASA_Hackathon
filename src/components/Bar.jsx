import React from 'react';
import Image from 'next/image';
import styles from './component.module.css';

const Bar = (props = '230px') => {
  return (
    <div className={styles.barContainer} style={{ width: '100%', height: '100%', top: props.top }}>
      <Image alt="" src="/assets/bar.png" layout="fill" objectFit="contain" />
    </div>
  );
};

export default Bar;
