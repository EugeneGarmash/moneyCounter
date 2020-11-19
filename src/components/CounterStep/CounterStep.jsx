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
import AdditionalInfo from './AdditionalSalaryInfo';
import Multipliers from './Multipliers/Multipliers';
import Animation from '../Animation/Animation';
// import bonfireWav from '../../static/bonfire.wav';

import { createAudio, pauseAudio } from '../../redux/audioReducer/audioReducer';

import bonfireWav from '../../static/bonfire.wav';
import forestWav from '../../static/forest.wav';


const entertainmentMode = ['fire', 'forest', 'sea', 'rain', 'New Year'];


const CounterStep = () => {
  const dispatch = useDispatch();
  const timerId = useRef(null);
  // let audioRef = null;   // const audioRef = useRef(null);
  const counterTimeStep = useSelector(state => state.counter.counterTimeStep);
  const audioInstance = useSelector(state => state.audio.audioInstance);
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

  useEffect(() => {
    audioInstance && console.log(audioInstance.src);
    audioInstance && audioInstance.play();
    console.log("CounterStep -> audioInstance", audioInstance);
  }, [audioInstance])

  const createAnAudio = () => {
    // audioRef = new Audio(bonfireWav);
    // audioRef.loop = true;
    // // audioRef.volume = 0.1;
    // console.log("createAnAudio -> audioRef", audioRef);
    // audioRef.play();

    dispatch(createAudio());

    // audioRef.addEventListener("canplaythrough", event => {
    //   console.log('HEY');
    //   /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
    //   audioRef.play();
    // });
  }

  // const changeAudio = () => {

  // }


  // new year


  const handleChangeEntertainmentMode = mode => ()=> {
    dispatch(createAudio(mode));
  }


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
      <ul className='enteratiningModes'>
        {entertainmentMode.map(mode => (
          <button
            key={mode}
            // onClick={handleChangeEntertainmentMode(mode)}
            onClick={() => dispatch(pauseAudio())}
          >
            {mode}
          </button>
        ))}
      </ul>
      {/* <Multipliers /> */}
      {/* <AdditionalInfo
        counterSalaryStep={counterSalaryStep}
      /> */}
    </>
  );
}


export default CounterStep;