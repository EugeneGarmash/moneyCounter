import { combineReducers } from 'redux';
import salaryReducer from './salaryReducer/salaryReducer';
import appReducer from './appReducer/appReducer';
import counterReducer from './counterReducer/counterReducer';
import authReducer from './authReducer/authReducer';
import modalReducer from './modalReducer/modalReducer';

const rootReducer = combineReducers({
    app: appReducer,
    salary: salaryReducer,
    counter: counterReducer,
    auth: authReducer,
    modal: modalReducer,
});

export default rootReducer;