import React, { useState, useEffect } from 'react';
import styles from './component.module.css';
import { Chart1, Chart2, Chart3, Chart4, Chart5 } from './Chartbox';

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
          saveData(data[chart]);
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
      <div className={styles.chartBoxContainer}>
        {chart === 'low_energy_protons' && <Chart1 chart={chart} data={data} />}
        {chart === 'low_energy_electrons' && <Chart2 chart={chart} data={data} />}
        {chart === 'magnetic_field' && <Chart3 chart={chart} data={data} />}
        {chart === 'plasma' && <Chart4 chart={chart} data={data} />}
        {chart === 'high_energy_protons' && <Chart5 chart={chart} data={data} />}
      </div>
      <div className={styles.chartBtnContainer}>
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
    </div>
  );
};

export default Chart;
