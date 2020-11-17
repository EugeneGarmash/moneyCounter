import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager';
import AppFooter from '../AppFooter';
import { openModal, AUTH_MODAL } from '../../redux/modalReducer/modalReducer';
import { StyleRoot } from 'radium';
import Spinner from '../Spinner';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PersonalHistory from '../PersonalHistory';

import { routes } from '../../utils/constants';
import { Button } from '../AppMainButton/AppMainButton';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';


const App = () =>  {

  return (
    <BrowserRouter>
      <StyleRoot>
        <div className="App">
          <div className='container'>
            <AppHeader />
            <Switch>
              <Route path={routes.main}>
                <AppStepManager />
                <AppFooter />
              </Route>
              <Route path={routes.info}>
                <p>I am Eugene Garmash and I am a web developer</p>
              </Route>
              <Route path={routes.personal}>
                <PersonalHistory/>
              </Route>
            </Switch>



            <Spinner />

          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;