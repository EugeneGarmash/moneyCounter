import React from "react";
import Fire from './Fire/Fire';
import Forest from './Forest/Forest';
// import Sea from './Sea/Sea';
// import Rain from './Rain/Rain';
// import NewYear from './NewYear/NewYear';

const Animation = props => {

  const { animationName } = props;

  switch (animationName) {
    case 'fire':
      console.log('FIRE'); // постоянный ререндер из-за счётчика
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

export default Animation;