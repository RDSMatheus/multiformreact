import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ summary, monthly, setMonthly, options }) => {
  console.log(monthly);
  const [total, setTotal] = React.useState(0);
  let planType = monthly ? 'Monthly' : 'Yearly';
  let totalType = monthly ? 'per month' : 'per year';

  const getPrice = () => {
    const selectedOption = options.find(
      (option) => option[monthly ? 'monthly' : 'yearly'],
    );
    if (selectedOption) {
      const plan = selectedOption[monthly ? 'monthly' : 'yearly'].find(
        (item) => item.plan === summary.plan.plan,
      );
      if (plan) {
        console.log(plan.price.replace('$', '').replace('/mo', ''));
        return plan.price;
      }
    }
    return '$0';
  };

  const extractNumericValue = (priceString) => {
    const numericValue = parseFloat(priceString.replace(/[^\d.]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  React.useEffect(() => {
    const calculateTotal = () => {
      let calculatedTotal = 0;

      const planPrice = getPrice();
      calculatedTotal += monthly
        ? extractNumericValue(planPrice)
        : extractNumericValue(planPrice) * 10;

      summary.addOn.forEach((item) => {
        const itemPrice = monthly ? item.price : item.price * 10;
        calculatedTotal += parseFloat(itemPrice);
      });

      return calculatedTotal;
    };
    setTotal(calculateTotal());
  }, [monthly, summary, options]);

  let planPrice = monthly ? '/mo' : '/yr';

  return (
    <>
      <section className={styles.container}>
        <div className={styles.summaryHeader}>
          <div>
            <p>
              {summary.plan.plan}({planType})
            </p>
            <button onClick={() => setMonthly(!monthly)}>Change</button>
          </div>
          <span>{getPrice()}</span>
        </div>
        {summary.addOn && (
          <ul>
            {summary.addOn.map((item) => (
              <li key={item.title} className={styles.addOnList}>
                {item.title}
                <span>
                  $
                  {monthly
                    ? item.price + planPrice
                    : item.price * 10 + planPrice}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <p className={styles.total}>
        Total({totalType})
        <span>
          ${total}
          {planPrice}
        </span>
      </p>
    </>
  );
};

export default Summary;
