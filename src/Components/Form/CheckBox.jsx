import React from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({ monthly, setMonthly }) => {
  function toggleMonth() {
    setMonthly(!monthly);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span>Monthly</span>
        <div className={styles.switch}>
          <input type="checkbox" checked={monthly} onChange={toggleMonth} />
          <span className={styles.slider}></span>
        </div>
        <span>Yearly</span>
      </label>
    </div>
  );
};

export default CheckBox;
