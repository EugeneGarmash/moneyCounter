import { render } from "@testing-library/react";
import React from "react";
import Fire from './Fire/Fire';
import Forest from './Forest/Forest';
// import Sea from './Sea/Sea';
// import Rain from './Rain/Rain';
// import NewYear from './NewYear/NewYear';

import classes from './Animation.module.scss';

const Animation = props => {

  const { animationName } = props;

  const renderAnimation = (param) => {
    switch (animationName) {
      case 'fire':
        // console.log('FIRE'); // постоянный ререндер из-за счётчика
        return (
          <Fire />
        )
      case 'forest':
        return (
          <Forest />
        )
      // case 'sea':
      //   return (
      //     <Sea />
      //   )
      // case 'rain':
      //   return (
      //     <Rain />
      //   )
      // case 'newYear':
      //   return (
      //     <NewYear />
      //   )
      default:
        return (
          <Fire />
        )
    }
  }

  return (
    <div className={classes.Animation}>
      {renderAnimation()}
    </div>
  )

}

export default Animation;