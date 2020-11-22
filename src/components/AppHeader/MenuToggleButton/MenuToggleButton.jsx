import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MenuToggleButton.module.scss';
import cn from 'classnames';
import {
  openModal,
  MENU_MODAL,
  // closeModal,
  // AUTH_MODAL
} from '../../../redux/modalReducer/modalReducer';


const MenuToggleButton = () => {

  // const [menuIsOpen, toggleMenu] = useState(false);

  const dispatch = useDispatch();
  const mobileMeuIsOpen = useSelector(s => s.modal[MENU_MODAL].isOpen);

  const handleToggleMenu = () => {
    // toggleMenu(!menuIsOpen);
    dispatch(openModal(MENU_MODAL));
  }

  return (
    <div
      onClick={handleToggleMenu}
      className={cn(
        classes.MenuToggleButton , {
        [classes.MenuToggleButton_open]: mobileMeuIsOpen,
      })
    }>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuToggleButton;