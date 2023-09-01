import React from 'react';
import styles from './FormSideBar.module.css';

const FormSideBar = ({ count }) => {
  return (
    <section className={styles.sideBar}>
      <ul>
        <li>
          {count === 1 ? (
            <div className={styles.activeCount}>1</div>
          ) : (
            <div>1</div>
          )}

          <span>Step 1</span>
          <p>Your info</p>
        </li>
        <li>
          {count === 2 ? (
            <div className={styles.activeCount}>2</div>
          ) : (
            <div>2</div>
          )}
          <span>Step 2</span>
          <p>Select plan</p>
        </li>
        <li>
          {count === 3 ? (
            <div className={styles.activeCount}>3</div>
          ) : (
            <div>3</div>
          )}
          <span>Step 3</span>
          <p> Add-ons</p>
        </li>
        <li>
          {count === 4 ? (
            <div className={styles.activeCount}>4</div>
          ) : (
            <div>4</div>
          )}
          <span>Step 4</span>
          <p>Summary</p>
        </li>
      </ul>
    </section>
  );
};

export default FormSideBar;
