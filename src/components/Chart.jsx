import React, { useState, useEffect } from 'react';
import styles from './component.module.css';

const Chart = () => {
  const [chart, setChart] = useState('low_energy_protons');
  const [data, saveData] = useState();

  async function getData(chart) {
    try {
      fetch(`https://hero-parker-server.herokuapp.com/${chart}.json`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          saveData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(chart);
  }, [chart]);

  console.log(data);

  return (
    <div className={styles.chartContainer}>
      <button type="button" className={styles.chartBtn} onClick={() => setChart('low_energy_protons')}>
        Low Energy Protons
      </button>
      <button type="button" className={styles.chartBtn} onClick={() => setChart('low_energy_electrons')}>
        Low Energy Electrons
      </button>
      <button type="button" className={styles.chartBtn} onClick={() => setChart('magnetic_field')}>
        Magnetic Field
      </button>
      <button type="button" className={styles.chartBtn} onClick={() => setChart('plasma')}>
        Plasma
      </button>
      <button type="button" className={styles.chartBtn} onClick={() => setChart('high_energy_protons')}>
        High Energy Protons
      </button>
    </div>
  );
};

export default Chart;
