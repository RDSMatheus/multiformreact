import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={
          props.error ? `${styles.input} ${styles.inputError}` : styles.input
        }
        type={props.type}
        {...props}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
