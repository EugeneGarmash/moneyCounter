import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import classes from './CounterStep.module.scss';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import getCorrectTimeName from '../../utils/getCorrectTimeName';
// import AdditionalInfo from './AdditionalSalaryInfo';
// import Multipliers from './Multipliers/Multipliers';
import Animation from '../Animation/Animation';
import { entertainmentMode } from '../../utils/constants';
import { changeEntertainmentMode } from '../../redux/appReducer/appReducer';
import multipliersClasses from '../CounterStep/Multipliers/Multipliers.module.scss';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';

const CounterStep = () => {
  const dispatch = useDispatch();
  const timerId = useRef(null);
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);
  const counterIsActive = useSelector(state => state.counter.counterIsActive);
  const appEntertainmentMode = useSelector(s => s.app.entertainmentMode);

  const [counterState, setCounterPassed] = useState({
    secondsPassed: 0,
    counterValue: 0,
    paused: counterIsActive,
  });

  const startInterval = useCallback(
    () => {
      timerId.current = setInterval(
        () => {
          setCounterPassed(state =>
            !counterIsActive
              ? state
              : {
                  ...state,
                counterValue: state.counterValue + counterSalaryStep,
                secondsPassed: state.secondsPassed + counterTimeStep / 1000,
              }
          );
        },
        counterTimeStep
      )
    },
    [counterIsActive, counterSalaryStep, counterTimeStep]
  );

  useEffect(() => {
    startInterval();
    return () => clearTimeout(timerId.current);
  }, [startInterval]);

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
      <ul className={multipliersClasses.Multipliers}>
        {Object.entries(entertainmentMode).map(entry => {
          const name = entry[0];
          return ( // <li></li>
            <button
              key={name}
              className={buttonClasses.AppMainButton}
              onClick={() => dispatch(changeEntertainmentMode(entry))}
              disabled={name === appEntertainmentMode} // disabled ??
            >
              {name}
            </button>
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