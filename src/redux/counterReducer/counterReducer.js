import { toggleAppState } from '../appReducer/appReducer';
import testaxios from '../../utils/testaxios.js';

const SET_COUNTER_SALARY_STEP = 'SET_COUNTER_SALARY_STEP';
const TOGGLE_COUNTER_STATE = 'TOGGLE_COUNTER_STATE';

const counterTimeStepInSeconds = 1; // constants!!!
const counterTimeStep = counterTimeStepInSeconds * 1000;
const time = {
  daysInAYear: 365,
  workDaysInAYear: 261,
  monthsInAYear: 12,
  hoursInADay: 24,
  workHoursInADay: 9,
  secondsInAnHour: 3600,
}

const initialState = {
  counterTimeStep,
  counterTimeStepInSeconds,
  counterSalaryStep: 0,
  counterIsActive: false,
}

export const toggleCounterState = () => {
  return { type: TOGGLE_COUNTER_STATE };
};

export const initializeACounter = (token) => (dispatch, getState) => {
  dispatch(toggleAppState());
  dispatch(setCounterSalaryStep());

  const state = getState();
  const userId = state.auth.success.localId;
  const salary = state.salary.salaryValue;
  const salaryStep = state.counter.counterSalaryStep.toFixed(3);

  // testaxios.post(`/salaries/${userId}.json`, { salary, salaryStep })
  //   .then(response => {
      dispatch(toggleCounterState());
    // })
    // .catch(error => {
    // });
}

export const setCounterSalaryStep = multiplier => (dispatch, getState) => {
  const state = getState(); /** @info can be done in a reducer as well*/

  const salary = state.salary.salaryValue;
  const intervalsInAnHour = 3600 / counterTimeStepInSeconds;

  const payload = salary *
    time.monthsInAYear /
    time.workDaysInAYear /
    time.workHoursInADay /
    intervalsInAnHour *
    (multiplier || 1)
  ;

  return dispatch({
    type: SET_COUNTER_SALARY_STEP,
    payload,
  });
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {

    case SET_COUNTER_SALARY_STEP:
      return {
        ...state,
        counterSalaryStep: action.payload,
      }

    case TOGGLE_COUNTER_STATE:
      const counterIsActive = state.counterIsActive;
      return {
        ...state,
        counterIsActive: !counterIsActive,
      }

    default:
      return state;

  }
}

export default counterReducer;