import React from 'react';
import styles from './Title.module.css';

const Title = ({ title, p }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.p}>{p}</p>
    </>
  );
};

export default Title;
