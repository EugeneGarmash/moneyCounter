import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose , applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import rootReducer from './redux/store';
import createSagaMiddleware from 'redux-saga';
import { logoutSaga } from '../src/redux/sagas/authSaga'; // checkAuthTimeoutSaga

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null ||
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) ||
  compose
;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(logoutSaga);

ReactDOM.render(
  // <React.StrictMode> {/** renders everything twice */}
    <Provider store={store}>
      <App />
    </Provider>, // coma might be redundant
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
