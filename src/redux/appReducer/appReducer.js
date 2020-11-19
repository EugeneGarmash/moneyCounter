import { changeTrack, launchAnAudio } from "../audioReducer/audioReducer";

const TOGGLE_APP_STATE = 'TOGGLE_APP_STATE';
const TOGGLE_APP_SPINNER = 'TOGGLE_APP_SPINNER';
const CHANGE_ENTERTAINMENT_MODE = 'CHANGE_ENTERTAINMENT_MODE';
const SET_ENTERTAINMENT_MODE = 'SET_ENTERTAINMENT_MODE';

const initialState = {
  appIsInSalaryStep: true,
  entertainmentMode: '',
}

export const toggleAppState = () => ({
  type: TOGGLE_APP_STATE,
});

export const toggleAppSpinner = () => ({
  type: TOGGLE_APP_SPINNER,
});

export const changeEntertainmentMode = payload => (dispatch, getState) => {
  const audioInstance = getState().audio.audioInstance;
  const [name, sound] = payload;

  dispatch({ type: CHANGE_ENTERTAINMENT_MODE, name });
  audioInstance /** @info initialRender */
    ? dispatch(changeTrack(sound))
    : dispatch(launchAnAudio());
};


const appReducer = (state = initialState, action) => {

  switch(action.type) {

    case TOGGLE_APP_STATE:
      const appIsInSalaryStep = state.appIsInSalaryStep;
      return {
        ...state,
        appIsInSalaryStep: !appIsInSalaryStep,
      }

    case TOGGLE_APP_SPINNER:
      return {
        ...state,
        spinner: !state.spinner,
      }

    case CHANGE_ENTERTAINMENT_MODE:
      return {
        ...state,
        entertainmentMode: action.payload,
      }

    default:
      return state;

  }

}

export default appReducer;