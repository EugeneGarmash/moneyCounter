import React from 'react'
import classes from './CounterStep.module.scss';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import getCorrectTimeName from '../../utils/getCorrectTimeName';
/** @todo */
// import AdditionalInfo from './AdditionalSalaryInfo';
// import Multipliers from './Multipliers/Multipliers';
import Animation from '../Animation/Animation';
import { entertainmentMode } from '../../utils/constants';
import { changeEntertainmentMode } from '../../redux/appReducer/appReducer';
import multipliersClasses from '../CounterStep/Multipliers/Multipliers.module.scss';
import Button from '../Button/Button';

const CounterStep = ({counterState}) => {
  const dispatch = useDispatch();
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);
  const appEntertainmentMode = useSelector(s => s.app.entertainmentMode);

  return (
    <>
      <div className={classes.mainInfoContainer}>
        <p className={classes.CounterStep__noPaddingItem}>You've got</p>
        <p className={`${classes.CounterStep} ${classes.CounterStep__noPaddingItem}`}>
          {counterState.counterValue.toFixed(2)} items
        </p>
        <p className={classes.CounterStep__noPaddingItem}>
          for the last {getCorrectTimeName(counterState.secondsPassed)}
        </p>
        <p>You get ~{counterSalaryStep.toFixed(2)} items per {counterTimeStep / 1000} second(s)</p>
      </div>
      <Animation />
      <ul className={classes.CounterStep__entertainmentModes}>
        {Object.entries(entertainmentMode).map(entry => {
          const name = entry[0];
          return (
            <li
              key={name}
              className={classes.CounterStep__entertainmentItem}
            >
              <Button
                onClick={() => dispatch(changeEntertainmentMode(entry))}
                disabled={name === appEntertainmentMode} /** @todo */
              >
                {name}
              </Button>
            </li>
          )
        })}
      </ul>

      {/*
        <Multipliers />
        <AdditionalInfo
          counterSalaryStep={counterSalaryStep}
        />
      */}
    </>
  );
}


export default CounterStep;