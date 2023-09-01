import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        {...props}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p>{props.error}</p>}
    </>
  );
};

export default Input;
