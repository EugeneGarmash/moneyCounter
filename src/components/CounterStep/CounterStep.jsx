import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import classes from './CounterStep.module.scss';
import {
  useSelector,
} from 'react-redux';
import getCorrectTimeName from '../../utils/getCorrectTimeName';
import AdditionalInfo from './AdditionalSalaryInfo';
import Multipliers from './Multipliers/Multipliers';
import Animation from '../Animation/Animation';
import bonfireWav from '../..//static/bonfire.wav';

const CounterStep = () => {
  const timerId = useRef(null);
  // const audioRef = useRef(null);
  let audioRef = null;
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const counterSalaryStep = useSelector(state => state.counter.counterSalaryStep);
  const counterIsActive = useSelector(state => state.counter.counterIsActive);

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

  const createAnAudio = () => {
    audioRef = new Audio(bonfireWav);
    audioRef.loop = true;
    // audioRef.volume = 0.1;
    console.log("createAnAudio -> audioRef", audioRef);
    audioRef.play();

    // audioRef.addEventListener("canplaythrough", event => {
    //   console.log('HEY');
    //   /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
    //   audioRef.play();
    // });
  }

  const changeAudio = () => {

  }


  // new year

  useEffect(() => {
    createAnAudio();
  }, [])

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
      <Animation animationName='forest' />
      {/* <Multipliers /> */}
      {/* <AdditionalInfo
        counterSalaryStep={counterSalaryStep}
      /> */}
    </>
  );
}


export default CounterStep;