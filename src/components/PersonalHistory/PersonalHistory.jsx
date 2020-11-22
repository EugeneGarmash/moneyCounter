import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSalaries } from '../../redux/authReducer/authActionCreators';
import { AUTH_MODAL, openModal } from '../../redux/modalReducer/modalReducer';
import './PersonalHistory.scss'
import cn from 'classnames';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';

const PersonalHistory = () => {
  const dispatch = useDispatch();
  const userIsAuthentificated = useSelector(s => s.auth.success.idToken);
  const localId = useSelector(s => s.auth.success.localId);

  useEffect(() => {
    // if (userIsAuthentificated && localId) {
      // dispatch(getSalaries(userIsAuthentificated));
    // }

    if (!userIsAuthentificated) {
      dispatch(openModal(AUTH_MODAL));
    }

  }, [dispatch, userIsAuthentificated, localId])

  return !userIsAuthentificated
    ? <div>
        <p>You're not logged in</p>
        <Link
          to='/'
          className={cn(buttonClasses, 'PersonalHistory__mainPageLink')}
        >
          Go to main page
        </Link>
      </div>
    : <p>some personal history</p>
}

export default PersonalHistory;