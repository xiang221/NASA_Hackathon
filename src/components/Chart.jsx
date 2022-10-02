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
      <button type="button" className={styles.chartBtn} onClick={() => setChart('low_energy_protons')}>
        Low Energy Protons
      </button>
      {chart === 'low_energy_protons' && <Chart1 chart={chart} data={data} />}
      <button type="button" className={styles.chartBtn} onClick={() => setChart('low_energy_electrons')}>
        Low Energy Electrons
      </button>
      {chart === 'low_energy_electrons' && <Chart2 chart={chart} data={data} />}
      <button type="button" className={styles.chartBtn} onClick={() => setChart('magnetic_field')}>
        Magnetic Field
      </button>
      {chart === 'magnetic_field' && <Chart3 chart={chart} data={data} />}
      <button type="button" className={styles.chartBtn} onClick={() => setChart('plasma')}>
        Plasma
      </button>
      {chart === 'plasma' && <Chart4 chart={chart} data={data} />}
      <button type="button" className={styles.chartBtn} onClick={() => setChart('high_energy_protons')}>
        High Energy Protons
      </button>
      {chart === 'high_energy_protons' && <Chart5 chart={chart} data={data} />}
    </div>
  );
};

export default Chart;
