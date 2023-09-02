import React from 'react';
import styles from './FormSideBar.module.css';

const FormSideBar = ({ count }) => {
  const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

  return (
    <section className={styles.sideBar}>
      <ul>
        {steps.map((step, index) => (
          <li key={step}>
            <div className={count === index + 1 ? styles.activeCount : ''}>
              {index + 1}
            </div>
            <span>Step {index + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FormSideBar;
