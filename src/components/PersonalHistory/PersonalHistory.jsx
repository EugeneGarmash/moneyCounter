import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSalaries } from '../../redux/authReducer/authActionCreators';

const PersonalHistory = () => {
  const dispatch = useDispatch();
  const userIsAuthentificated = useSelector(s => s.auth.success.idToken);
  const localId = useSelector(s => s.auth.success.localId);

  useEffect(() => {
    // if (userIsAuthentificated && localId) {
      dispatch(getSalaries(userIsAuthentificated));
    // }
  }, [dispatch, userIsAuthentificated, localId])

  return !userIsAuthentificated
    ? <p>You're not logged in</p>
    : <p>some personal history</p>
}

export default PersonalHistory;