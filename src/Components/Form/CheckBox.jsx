import React from 'react';
import styles from './CheckBox.module.css';

const CheckBox = ({ value, options, setValue, monthly }) => {
  function handleChange(selectedValue) {
    const optionSelected = value.some((item) => item.title === selectedValue.title);

    if (optionSelected) {
      setValue(value.filter((item) => item !== selectedValue));
    } else {
      setValue([...value, selectedValue]);
    }
  }
  return (
    <>
      {options.map((option) => (
        <label
          key={option.title}
          className={
            value.includes(option.title)
              ? `${styles.label} ${styles.active}`
              : styles.label
          }
        >
          <span className={styles.checkbox}>
            <input
              type="checkbox"
              value={option}
              checked={value.some((item) => item.title === option.title)}
              onChange={() => handleChange(option)}
            />
            <span className={styles.checkmark}></span>
          </span>
          <div>
            <h2>{option.title}</h2>
            <p>{option.description}</p>
          </div>
          {monthly ? (
            <span className={styles.price}>+${option.price}/mo</span>
          ) : (
            <span className={styles.price}>+${option.price * 10}/yr</span>
          )}
        </label>
      ))}
    </>
  );
};

export default CheckBox;
