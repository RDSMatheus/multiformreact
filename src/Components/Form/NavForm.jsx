import React from 'react';
import styles from './NavForm.module.css';

const NavForm = ({ value, setValue, setSubmitted }) => {
  return (
    <div className={styles.container}>
      {value > 1 ? (
        <button className={styles.voltar} onClick={() => setValue(value - 1)}>
          Go Back
        </button>
      ) : (
        ''
      )}
      {value === 4 ? (
        <button className={styles.confirm} onClick={() => setSubmitted(true)}>
          Confirmar
        </button>
      ) : (
        <button
          className={styles.proximo}
          style={{ marginLeft: 'auto' }}
          onClick={() => setValue(value + 1)}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default NavForm;
