import React from 'react';
import ThankYou from '../../assets/images/icon-thank-you.svg';
import Title from './Title';
import styles from './ConfirmationPage.module.css';

const ConfirmationPage = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={ThankYou} alt="Confirmation" />
      </div>
      <Title
        title="Thank you!"
        p="Thanks for confirming your subscription! We hope you have fun
  using our platform. If you ever need support, please feel free
  to email us at support@loremgaming.com."
      />
    </div>
  );
};

export default ConfirmationPage;
