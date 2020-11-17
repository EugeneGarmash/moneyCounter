const TOGGLE_APP_STATE = 'TOGGLE_APP_STATE';
const TOGGLE_APP_SPINNER = 'TOGGLE_APP_SPINNER';


const initialState = {
  appIsInSalaryStep: true,
  spinner: false,
}

export const toggleAppState = () => ({
  type: TOGGLE_APP_STATE,
});

export const toggleAppSpinner = () => ({
  type: TOGGLE_APP_SPINNER,
});

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

    default:
      return state;

  }
}

export default appReducer;