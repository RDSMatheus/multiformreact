import React from 'react';
import Input from './Input';
import styles from './FormContent.module.css';
import Radio from './Radio';
import Switch from './Switch';
import Title from './Title';
import CheckBox from './CheckBox';
import Summary from './Summary';

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
  summary,
}) => {
  console.log(summary);
  if (type === 'text')
    return (
      <div>
        <Title title={title} p={p} />
        <Input id="name" type="text" label="Name" {...username} />
        <Input id="email" type="email" label="Email Adress" {...email} />
        <Input id="number" type="number" label="Phone Number" {...number} />
      </div>
    );
  if (type === 'radio')
    return (
      <div>
        <Title title={title} p={p} />
        <Radio
          value={value}
          setValue={setValue}
          monthly={monthly}
          options={options}
        />
        <Switch monthly={monthly} setMonthly={setMonthly} />
      </div>
    );
  if (type === 'checkbox')
    return (
      <div>
        <Title title={title} p={p} />
        <CheckBox
          value={value}
          options={options}
          setValue={setValue}
          monthly={monthly}
        />
      </div>
    );
  return (
    <>
      <Title title={title} p={p} />
      <Summary
        summary={summary}
        setMonthly={setMonthly}
        monthly={monthly}
        options={options}
      />
    </>
  );
};

export default FormContent;
