import React from 'react';
import classes from './AdditionalSalaryInfo.module.scss';

const additionalies = [
  {
    seconds: 60,
    time: 'per minute',
  },
  {
    seconds: 3600,
    time: 'per hour',
  },
  {
    seconds: 32400,
    time: 'per day',
  },
  {
    seconds: 162000,
    time: 'per workweek',
  },
  {
    seconds: 712800,
    time: 'per month',
  },
  {
    seconds: 8553600,
    time: 'per year',
  },
  {
    seconds: 102643200,
    time: 'when you\'re young (21 - 32 y.o.)',
  },
];

const AdditionalSalaryInfo = props => {
  const {
    counterSalaryStep,
  } = props;
  return (
    <ul className={classes.AdditionalSalaryInfo}>
      { additionalies.map((additionaly, index) => {
          const withDecimal = (index === 0 || index === 1);
          const salaryToFixed = (counterSalaryStep * additionaly.seconds).toFixed(withDecimal);
          const salaryFormatted = salaryToFixed.length > 3 && !withDecimal
            ? salaryToFixed.length <= 6
              ? `${salaryToFixed.slice(0, -3)} ${salaryToFixed.slice(-3)}`
              : salaryToFixed.length >= 8
                ? 'a whole shitload of'
                : `${salaryToFixed.slice(0, 1)} ${salaryToFixed.slice(1, -3)} ${salaryToFixed.slice(-3)}`
            : salaryToFixed;
          return (
            <li
              key={additionaly.time}
              className={classes.AdditionalSalaryInfo__additionaly}
            >
              You will make ~{salaryFormatted} items {additionaly.time}
            </li>
          );
        })

      }
    </ul>
  )
}

export default AdditionalSalaryInfo;