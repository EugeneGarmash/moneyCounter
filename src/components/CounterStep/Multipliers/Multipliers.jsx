import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCounterSalaryStep } from '../../../redux/counterReducer/counterReducer';
import classes from './Multipliers.module.scss';
import buttonClasses from '../../AppMainButton/AppMainButton.module.scss';

const incomeArray = [1, 1.5, 2, 5];

const Multipliers = () => {

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(0);

  const increaseIncome = (value, index) => () => {
    setDisabled(index);
    dispatch(setCounterSalaryStep(value));
  }

  return (
    <ul className={classes.Multipliers}>
      { incomeArray.map((incomeItem, index) =>
          <button
            key={incomeItem}
            className={buttonClasses.AppMainButton}
            onClick={increaseIncome(incomeItem, index)}
            disabled={index === disabled}
          >{incomeItem}x income</button>
      )}
    </ul>
  )
}

export default Multipliers