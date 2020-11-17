export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const AUTH_MODAL = 'AUTH_MODAL';

const initialState = {
  [AUTH_MODAL]: {
    isOpen: false,
    data: {},
  },
}

export const openModal = (modalName, data) => {
  return {
    type: OPEN_MODAL,
    payload: {
      modalName,
      data,
    }
  }
}

export const closeModal = modalName => {
  return {
    type: CLOSE_MODAL,
    payload: {
      modalName,
      data: {},
    }
  }
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {

    case OPEN_MODAL:
      return {
        ...state,
        [action.payload.modalName]: {
          isOpen: true,
          data: action.payload.data,
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        [action.payload.modalName]: {
          isOpen: false,
          data: {},
        }
      }
    default:
      return state;

  }
}

export default modalReducer;