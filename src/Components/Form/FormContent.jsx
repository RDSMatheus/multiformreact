import React from 'react';
import Input from './Input';
import styles from './FormContent.module.css';

const FormContent = ({ username, email, number, title, p }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.p}>{p}</p>
      <Input id="name" type="text" label="Name"{...username} />
      <Input id="email" type="email" label="Email Adress"{...email} />
      <Input id="number" type="number" label="Phone Number"{...number} />
    </div>
  );
};

export default FormContent;
