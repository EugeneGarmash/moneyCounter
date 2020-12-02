import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { toggleAppState } from '../../redux/appReducer/appReducer';
import {
  setCounterSalaryStep,
  initializeACounter,
  toggleCounterState
} from '../../redux/counterReducer/counterReducer';

import classes from './AppMainButton.module.scss';
import { pauseAudio, playAudio } from '../../redux/audioReducer/audioReducer';

import Button from '../Button/Button';

const AppMainButton = props => {

  const {
    appIsInSalaryStep,
    counterIsActive,
    toggleAppState,
    salaryValue,
    toggleCounterState,
    initializeACounter,
    onPauseAudio, /** it happens when I forget to destructurize a prop - then no dispatch is fired */
    onPlayAudio,
  } = props;


  const handleCounterStepButtonClick = async (e) => {
    if (salaryValue) {
      // e.preventDefault();
      // window.grecaptcha.ready(function() {
      //   window.grecaptcha.execute('6LeT0OEZAAAAACWNvEOTwKHTF4L6vawvPVYQI8QS', {action: 'submit'})
      //     .then(function(token) {

            initializeACounter();

          }
    //     );
    //   });
    // }
  }

  const handlePause = () => {
    toggleCounterState();
    counterIsActive
      ? onPauseAudio()
      : onPlayAudio()

  }

  const handleStop = () => {
    toggleAppState();
    props.setCounterPassed({
      secondsPassed: 0,
      counterValue: 0,
      paused: true,
    })
    // saveUserSalary
  }

  return (
    appIsInSalaryStep
      ? salaryValue
        ? <Button
            textContent='Start a timer'
            classNames={classes.AppMainButton}
            onClick={handleCounterStepButtonClick}
          />
        : null
      : counterIsActive
          ? <Button
              textContent='pause'
              classNames={classes.AppMainButton}
              onClick={handlePause}
            />
          : <div>
              <div className={classes.AppMainButton__buttonContainer}>
                <Button
                  textContent='run'
                  classNames={classes.AppMainButton}
                  onClick={handlePause}
                />
              </div>
              <Button
                textContent='stop'
                classNames={classes.AppMainButton}
                onClick={handleStop}
              />
          </div>
  )
};

AppMainButton.propTypes = {
  appIsInSalaryStep: propTypes.bool,
  counterIsActive: propTypes.bool,
  salaryValue: propTypes.string,
}

export default connect(
  state => ({
    appIsInSalaryStep: state.app.appIsInSalaryStep, // or (state) => state.app.appState
    counterIsActive: state.counter.counterIsActive,
    salaryValue: state.salary.salaryValue,
  }), {
    toggleAppState,
    toggleCounterState,
    setCounterSalaryStep,
    initializeACounter,
    onPauseAudio: pauseAudio,
    onPlayAudio: playAudio,
})(AppMainButton);