import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openModal,
  closeModal,
  MENU_MODAL,
  AUTH_MODAL,
} from '../../redux/modalReducer/modalReducer';
import Modal from '../Modal';
import { routes } from '../../utils/constants';
import {
  // BrowserRouter,
  // Switch,
  // Route,
  // Link,
  NavLink
} from "react-router-dom";

import extraClasses from '../CounterStep/Multipliers/Multipliers.module.scss';
import buttonClasses from '../AppMainButton/AppMainButton.module.scss';

const MenuModal = () => {

  const dispatch = useDispatch();
  const menuModalIsOpen = useSelector(s => s.modal[MENU_MODAL].isOpen);

  const handleCloseMenuModal = () => {
    dispatch(closeModal(MENU_MODAL))
  }

  const handleOpenModal = () => {
    dispatch(openModal(AUTH_MODAL));
  }

  const handleCloseAuthModal = () => {
    dispatch(closeModal(AUTH_MODAL))
  }

  return (
    <Modal
      isOpen={menuModalIsOpen}
      onClose={handleCloseMenuModal}
      topAndLeft
      fullHeight
    >

      <div className='MenuModal'>

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

      </div>
      <style jsx>{`
        .MenuModal {
          /* width: 600px; */
          /* max-width: 100%; */
          width: 100%;
        }
        @media (max-width: 767px) {
          width:
        }
      `}</style>

    </Modal>
  )
}

export default MenuModal;