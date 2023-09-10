import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ monthly, setMonthly }) => {
  function toggleMonth() {
    setMonthly(!monthly);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={`${monthly ? styles.monthly : ''}`}>Monthly</span>
        <div className={styles.switch}>
          <input type="checkbox" checked={monthly} onChange={toggleMonth} />
          <span className={styles.slider}></span>
        </div>
        <span className={`${monthly === false ? styles.yearly : ''}`}>
          Yearly
        </span>
      </label>
    </div>
  );
};

export default Switch;
