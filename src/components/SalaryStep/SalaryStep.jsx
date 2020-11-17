import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import { setSalaryValue } from '../../redux/salaryReducer/salaryActionCreators';
import { logout } from '../../redux/authReducer/authActionCreators';
import { getPersonalData } from '../../redux/authReducer/authActionCreators';
import { setCounterSalaryStep } from '../../redux/counterReducer/counterReducer';
import { toggleAppState } from '../../redux/appReducer/appReducer';
import { initializeACounter } from '../../redux/counterReducer/counterReducer';
import Authentification from '../Authentification/Authentification';
import Modal from '../Modal';
import {
  openModal,
  closeModal,
  AUTH_MODAL
} from '../../redux/modalReducer/modalReducer';

import buttonClasses from '../AppMainButton/AppMainButton.module.scss';
import './SalaryStep.scss';

const salaryInputStyles = {
  padding: '10px',
  border: 'none',
  borderRadius: '3px',
  maxWidth: '100%',
  color: '#282c34',
  fontSize: '50px',
  marginBottom: '20px',
  textAlign: 'center',
  backgroundColor: 'rgba(230, 224, 224, 0.5)',
  ':hover': {
    outline: 'none',
    backgroundColor: 'rgba(230, 224, 224, 0.7)',
  },
  ':focus' : {
    outline: 'none',
    backgroundColor: 'rgba(230, 224, 224, 0.7)',
  },
  '@media (min-width: 2500px)': {
    backgroundColor: 'orange',
  }
}

const SalaryStep = props => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(s => s.auth.success.idToken);

  const handleSalaryInputChange = event => {
    props.setSalaryValue(event.target.value);
  }
  const handlePressEnter = (event) => {
    if (event.key === 'Enter' && props.salaryValue) {
      props.initializeACounter();
    }
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='SalaryStep'>
      <span className='SalaryStep__topText'>I make</span>
      <input
        type='text'
        style={salaryInputStyles}
        value={props.salaryValue}
        onChange={handleSalaryInputChange}
        placeholder='type here'
        onKeyDown={handlePressEnter}
      />
      <span className='SalaryStep__bottomText'>units per month</span>
      <br />
      <div className='SalaryStep__testBlock'>
        { isLoggedIn
            ? <div>
              <div className='SalaryStep__buttonContainer'>
                <button
                  onClick={handleLogout}
                  className={buttonClasses.AppMainButton}
                >
                  Logout
                </button>
              </div>
                <button
                  onClick={handleLogout}
                  className={buttonClasses.AppMainButton}
                >
                  Personal Cabinet
                </button>
              </div>
            : null

        }
      </div>
    </div>
  );
}

SalaryStep.propTypes = {
  salaryValue: propTypes.string,
  setSalaryValue: propTypes.func,
}

/** @info mapDispatchToProps may be a simple object */
// export default connect(
//   state => ({
//     salaryValue: state.salary.salaryValue,
//   }), {
//     setSalaryValue,
// })(Radium(SalaryStep));

export default connect(
  state => ({
    salaryValue: state.salary.salaryValue,
    authModalIsOpen: state.modal[AUTH_MODAL].isOpen,
  }), dispatch => ({
    setSalaryValue: value => dispatch(setSalaryValue(value)),
    toggleAppState: () => dispatch(toggleAppState()),
    setCounterSalaryStep: () => dispatch(setCounterSalaryStep()),
    initializeACounter: () => dispatch(initializeACounter()),
  })
)(Radium(SalaryStep));