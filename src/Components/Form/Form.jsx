import React from 'react';
import useForm from '../Hooks/useForm';
import Input from './Input';
import styles from './Form.module.css';
import FormContent from './FormContent';
import NavForm from './NavForm';

const Form = ({ count, setCount }) => {
  const username = useForm();
  const email = useForm('email');
  const number = useForm();
  console.log(count);
  function handleSubmit(event) {
    event.preventDefault();
    if (count === 5) return alert('Enviado');
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        {count === 1 && (
          <FormContent
            username={username}
            email={email}
            number={number}
            title="Personal info"
            p="Please provide your name, email address, and phone number."
          />
        )}

        {count === 2 && (
          <div>
            <label htmlFor="">
              2
              <input type="text" />
            </label>
          </div>
        )}
        {count === 3 && (
          <div>
            <label htmlFor="">
              3
              <input type="text" />
            </label>
          </div>
        )}
        {count === 4 && (
          <div>
            <label htmlFor="">
              4
              <input type="text" />
            </label>
          </div>
        )}
        <NavForm value={count} setValue={setCount} />
      </form>
    </section>
  );
};

export default Form;
