import React from 'react';
import useForm from '../Hooks/useForm';
import styles from './Form.module.css';
import FormContent from './FormContent';
import NavForm from './NavForm';
import ArcadeIcon from '../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../assets/images/icon-advanced.svg';
import ProIcon from '../../assets/images/icon-pro.svg';
import ConfirmationPage from './ConfirmationPage';

const optionsPlan = [
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

const optionsAddOn = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: '1',
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '2',
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '2',
  },
];

const Form = ({ count, setCount }) => {
  const username = useForm();
  const email = useForm('email');
  const number = useForm();
  const [plan, setPlan] = React.useState('');
  const [monthly, setMonthly] = React.useState(true);
  const [addOn, setAddOn] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const summary = { plan, monthly, addOn };

  console.log(count);
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.container}>
      {submitted ? (
        <ConfirmationPage />
      ) : (
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
              options={optionsPlan}
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
            <FormContent
              options={optionsAddOn}
              value={addOn}
              setValue={setAddOn}
              monthly={monthly}
              type="checkbox"
              title="Pick add-ons"
              p="Add-ons help enchace your gaming experience."
            />
          )}
          {count === 4 && (
            <FormContent
              options={optionsPlan}
              summary={summary}
              monthly={monthly}
              setMonthly={setMonthly}
              title="Finishing up"
              p="Double-check everything looks OK before confirming."
            />
          )}
          <NavForm
            value={count}
            setValue={setCount}
            setSubmitted={setSubmitted}
          />
        </form>
      )}
    </section>
  );
};

export default Form;
