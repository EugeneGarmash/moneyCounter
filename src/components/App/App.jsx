import React from 'react';
import { StyleRoot } from 'radium';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import AppHeader  from '../AppHeader/AppHeader';
import AppStepManager from '../AppStepManager';
import AppFooter from '../AppFooter';
import Spinner from '../Spinner';
import PersonalHistory from '../PersonalHistory';
import { routes } from '../../utils/constants';
import Audio from '../Audio/Audio';

import './App.scss';

const App = () =>  {
  return (
    <BrowserRouter>
      <StyleRoot>
        <div className="App">
          <div className='container'>
            <AppHeader />

            <Switch>
              <Route path={routes.info}>
                <p>I am Eugene Garmash and I am a web developer</p>
              </Route>
              <Route path={routes.personal}>
                <PersonalHistory />
              </Route>
              <Route path={routes.main}>
                <AppStepManager />
                <AppFooter />
              </Route>
            </Switch>

            <Spinner /> {/** component ??*/}
            <Audio />

          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;