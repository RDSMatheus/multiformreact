import React from 'react';
import Input from './Input';
import styles from './FormContent.module.css';
import Radio from './Radio';
import CheckBox from './CheckBox';

const FormContent = ({
  username,
  email,
  number,
  title,
  p,
  type,
  options,
  value,
  setValue,
  monthly,
  setMonthly,
}) => {
  if (type === 'text')
    return (
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.p}>{p}</p>
        <Input id="name" type="text" label="Name" {...username} />
        <Input id="email" type="email" label="Email Adress" {...email} />
        <Input id="number" type="number" label="Phone Number" {...number} />
      </div>
    );
  if (type === 'radio')
    return (
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.p}>{p}</p>
        <Radio
          value={value}
          setValue={setValue}
          monthly={monthly}
          options={options}
        />
        <CheckBox monthly={monthly} setMonthly={setMonthly} />
      </div>
    );
};

export default FormContent;
