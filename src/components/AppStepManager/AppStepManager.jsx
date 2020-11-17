import React from 'react'
import { useSelector } from 'react-redux';
import SalaryStep from '../SalaryStep/';
import CounterStep from '../CounterStep';
import './AppStepManager.scss';

const AppStepManager = () => {

  const appIsInSalaryStep = useSelector(state => state.app.appIsInSalaryStep);

  return (
    <main className='AppStepManager'>
    {
      appIsInSalaryStep
        ? <SalaryStep />
        : <CounterStep />
    }
  </main>
  );
}

export default AppStepManager;
