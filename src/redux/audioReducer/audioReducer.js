// import bonfireWav from '../../static/bonfire.wav';
import forestWav from '../../static/forest.wav';


const CREATE_AUDIO = 'CREATE_AUDIO';
const PAUSE_AUDIO = 'PAUSE_AUDIO';
const HANDLE_VOLUME = 'HANDLE_VOLUME';
const CHANGE_SOURCE = 'CHANGE_SOURCE';

const initialState = {
  audioInstance: null,
  // spinner: false,
}

export const createAudio = mode => {
  console.log("createAudio -> createAudio");
  return {
    type: CREATE_AUDIO,
    payload: mode,
  }
};

export const changeSource = src => {
  return {
    type: CHANGE_SOURCE,
    payload: src,
  }
};

export const pauseAudio = () => (dispatch, getState) => {
  const audioInstance = getState().audio.audioInstance;
  audioInstance.pause();
  return {
    type: PAUSE_AUDIO,
    payload: audioInstance, // same object ? better be so
  }
};

export const handleVolume = () => () => {
  // return {
  //   type: HANDLE_VOLUME,
  // }
};


const appReducer = (state = initialState, action) => {
  switch(action.type) {

    case CREATE_AUDIO:
      return {
        ...state,
        audioInstance: new Audio(forestWav)
      }

    case PAUSE_AUDIO:
      return {
        ...state,
        audioInstance: action.payload,
      }

    case CHANGE_SOURCE: {

      // const newAudio = state.audioInstance.pause();

      // p_prime = p.cloneNode(true)

      return {
        ...state,
        audioInstance: null,
      }
    }

    case HANDLE_VOLUME:
      return {
        ...state,
      }

    default:
      return state;

  }
}

export default appReducer;