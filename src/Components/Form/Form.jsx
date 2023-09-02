import React from 'react';
import useForm from '../Hooks/useForm';
import styles from './Form.module.css';
import FormContent from './FormContent';
import NavForm from './NavForm';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';

const options = [
  {
    monthly: [
      {
        plan: 'arcade',
        icon: ArcadeIcon,
        price: '$9/mo',
      },
      {
        plan: 'advanced',
        icon: AdvancedIcon,
        price: '$12/mo',
      },
      { plan: 'pro', icon: ProIcon, price: '$15/mo' },
    ],
  },
  {
    yearly: [
      {
        plan: 'arcade',
        icon: ArcadeIcon,
        price: '$90/yr',
        promo: '2 months free',
      },
      {
        plan: 'advanced',
        icon: AdvancedIcon,
        price: '$120/yr',
        promo: '2 months free',
      },
      { plan: 'pro', icon: ProIcon, price: '$150/yr', promo: '2 months free' },
    ],
  },
];

const Form = ({ count, setCount }) => {
  const username = useForm();
  const email = useForm('email');
  const number = useForm();
  const [plan, setPlan] = React.useState('');
  const [monthly, setMonthly] = React.useState(true);

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
            type="text"
            title="Personal info"
            p="Please provide your name, email address, and phone number."
          />
        )}

        {count === 2 && (
          <FormContent
            options={options}
            value={plan}
            setValue={setPlan}
            type="radio"
            title="Select your plan"
            p="You have the option of monthly or yearly billing."
            monthly={monthly}
            setMonthly={setMonthly}
          />
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
