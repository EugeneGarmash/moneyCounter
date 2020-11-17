import React from 'react';

import AppMainButton from '../AppMainButton';

import './AppFooter.scss';

const AppFooter = () => {

  return (
    <div className='AppFooter'>
      <div className='AppFooter__primaryButtonContainer'>
        <AppMainButton />
      </div>
    </div>
  )
}

export default AppFooter;