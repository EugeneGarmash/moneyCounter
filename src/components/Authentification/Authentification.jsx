import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Authentification.module.scss';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';
import { postPersonalData } from '../../redux/authReducer/authActionCreators';
import { closeModal, AUTH_MODAL } from '../../redux/modalReducer/modalReducer';

const Authentification = () => {

  const dispatch = useDispatch();
  const error = useSelector(s => s.auth.error  ? s.auth.error.message : null);
  const [mode, setMode] = useState('signup');
  const appIsInSignUpMode = mode === 'signup';
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    setButtonIsDisabled(
      !(state.email.trim().length >= 3 &&
      state.password.trim().length >= 3)
    );
  }, [state, error])

  const handleChange = type => event => {
    setState({
      ...state,
      [type]: event.target.value,
    });
  };

  const handleMode = () => {
    setMode(mode === 'signin'
      ? 'signup'
      : 'signin'
    );
  }

  const handleClose = () => {
    dispatch(closeModal(AUTH_MODAL))
  }

  const handleSubmitAuthentificationData = () => {
    dispatch(postPersonalData(mode, { email: state.email, password: state.password }));
  };

  return (
    <div className={classes.Authentification}>
      <div className={classes.Authentification__formAndButtonContainer}>
        {error && <p>{error}</p>}
        <form className={classes.Authentification__formContainer} onSubmit={handleSubmitAuthentificationData}>
          <input type='text' className={classes.Authentification__input} placeholder='email' value={state.email} onChange={handleChange('email')}/>
          <input type='password' className={classes.Authentification__input} placeholder='password' value={state.password} onChange={handleChange('password')}/>
          <button
            className={buttonClasses.AppMainButton}
            type='button'
            onClick={handleSubmitAuthentificationData}
            disabled={buttonIsDisabled}
          >
            { appIsInSignUpMode ? 'Create an account' : 'Sign in' }
          </button>
        </form>
      </div>
      <div className={classes.Authentification__buttonContainer}>
        <button
          className={buttonClasses.AppMainButton}
          onClick={handleMode}
        >
          {`Switch to sign ${appIsInSignUpMode ? 'in' : 'up'}`}
        </button>
      </div>
      <button
        className={buttonClasses.AppMainButton}
        onClick={handleClose}
      >
        Proceed incognito {/** even when we're logged in !! - fix this */}
        {/** Add logout button */}
        {/** use <Redirect component */}
      </button>
    </div>
  );
}

export default Authentification;