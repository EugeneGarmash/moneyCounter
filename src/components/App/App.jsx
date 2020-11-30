import React, { Suspense, useEffect } from 'react';
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
import { routes } from '../../utils/constants';
import Audio from '../Audio/Audio';
import Modals from '../Modals/Modals';
import './App.scss';

const PersonalHistory = React.lazy(() => import('../PersonalHistory'));
// import PersonalHistory from '../PersonalHistory';


const App = () =>  {

  // MOVE TO A SEPARATE COMPONENT

  useEffect(() => {

    window.onbeforeunload = function (e) {
      e.preventDefault(); // Cancel the event
      e.returnValue = 'Really want to quit the game?'; // Chrome requires returnValue to be set
    };

    // Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
    document.onkeydown = function (e) {
      e = e || window.event;//Get event
      if (!e.ctrlKey) return;
      var code = e.which || e.keyCode; //Get key code

      switch (code) {
          case 83://Block Ctrl+S
          case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
            e.preventDefault();
            e.stopPropagation();
            break;
          default:
            break;
      }
    };

  }, []);

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
                <Suspense fallback={<div>Загрузка...</div>}>
                  <PersonalHistory />
                </Suspense>
              </Route>
              <Route path={routes.main}>
                <AppStepManager />
                <AppFooter />
              </Route>
            </Switch>

            {/* <Counter />  */}
            <Spinner /> {/** component ??*/}
            <Audio />
            <Modals />

          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;