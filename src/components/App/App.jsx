import React, {
  Suspense,
  useEffect,
  useState,
} from 'react';
import {
  useSelector,
} from 'react-redux';
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
import handleActiveTabClose from '../../utils/handleActiveTabClose';
import Counter from '../Counter/Counter';

import './App.scss';
const PersonalHistory = React.lazy(() => import('../PersonalHistory'));


const App = () =>  {

  const counterIsActive = useSelector(state => state.counter.counterIsActive);

  const [counterState, setCounterPassed] = useState({
    secondsPassed: 0,
    counterValue: 0,
    paused: counterIsActive,
  });

  useEffect(() => {
    handleActiveTabClose();
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
                <Suspense fallback={<div>LOADING...</div>}>
                  <PersonalHistory />
                </Suspense>
              </Route>
              <Route path={routes.main}>
                <AppStepManager counterState={counterState}/>
                <AppFooter />
              </Route>
            </Switch>


            {/** helpers */}

            <Counter
              counterIsActive={counterIsActive}
              setCounterPassed={setCounterPassed}
            />
            <Spinner />
            <Audio />
            <Modals />


          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  );
}

export default App;