import React from 'react';
import FormSideBar from './Form/FormSideBar';
import styles from './Container.module.css';
import Form from './Form/Form';

const Container = () => {
  const [count, setCount] = React.useState(1);
  return (
    <section className={styles.container}>
      <FormSideBar count={count} setCount={setCount} />
      <Form count={count} setCount={setCount} />
    </section>
  );
};

export default Container;
