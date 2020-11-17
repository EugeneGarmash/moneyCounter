import React from 'react';
import styled from 'styled-components';
import { routes } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

import extraClasses from '../CounterStep/Multipliers/Multipliers.module.scss';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Authentification from '../Authentification/Authentification';
import Modal from '../Modal';
import {
  openModal,
  closeModal,
  AUTH_MODAL
} from '../../redux/modalReducer/modalReducer';
import './AppHeader.scss';

/** @info returns react-component
 * @info to modify styles use `props => condition ? a : b ` in template literals
 * but do not forget to pass props first
 * */
const StyledDisclaimer = styled.p`
  margin: ${props => props.margin};
  font-size: calc(10px + 1vmin);
  @media (min-width: 2500px) {
    color: orange;
  }
`

const StyledH1 = styled.h1`
  margin: 0;
`


const SalaryStep = () => {

  const dispatch = useDispatch();
  // const salaryValue = useSelector(s => s.salary.salaryValue);
  const authModalIsOpen = useSelector(s => s.modal[AUTH_MODAL].isOpen);

  const handleOpenModal = () => {
    dispatch(openModal(AUTH_MODAL));
  }

  const handleCloseAuthModal = () => {
    dispatch(closeModal(AUTH_MODAL))
  }

  return (
    <header className="App__header">
      <ul className={extraClasses.Multipliers}>
        { Object.entries(routes).map(entry => (
            <li key={entry[0]}>
              <NavLink
                className='App_meuLink'
                to={entry[1]}
              >
                <button
                  className={buttonClasses.AppMainButton}
                >
                {entry[0]}
                </button>
              </NavLink>
              </li>
        ))}
        <li>
          <button
            onClick={handleOpenModal}
            className={buttonClasses.AppMainButton}
          >
            Auth
          </button>
        </li>
      </ul>
      <Modal
        isOpen={authModalIsOpen}
        onClose={handleCloseAuthModal}
      >
        <Authentification />
      </Modal>
      <StyledH1>Money counter</StyledH1>
      <StyledDisclaimer margin='0'>
        See how much your time cost
      </StyledDisclaimer>
      <style jsx>{`
        .App__header {
          {/* background-color: yellow; */}
        }
      `}</style>
    </header>
  );
}

export default SalaryStep;