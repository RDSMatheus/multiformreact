import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ monthly, options, value, setValue }) => {
  const planOptions = monthly ? options[0].monthly : options[1].yearly;

  return (
    <section className={styles.container}>
      {planOptions.map((option) => (
        <label
          key={option.plan}
          className={`${styles.label} ${
            option.plan === value ? styles.labelActive : ''
          }`}
        >
          <img src={option.icon} alt={option.plan} />
          <input
            className={styles.input}
            type="radio"
            id={option.plan}
            value={option.plan}
            checked={option.plan === value}
            onChange={(event) => setValue(event.target.value)}
          />
          {option.plan}
          <span>{option.price}</span>
          {option.promo && <span className={styles.promo}>{option.promo}</span>}
        </label>
      ))}
    </section>
  );
};

export default Radio;

