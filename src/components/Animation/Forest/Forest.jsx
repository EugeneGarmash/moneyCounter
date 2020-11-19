import React from 'react';
import classes from './Forest.module.scss';

const Forest = () => {
  return (
    <div className={classes.triangles}>
      <div className={classes.triangle2}></div>
      <div className={classes.triangle1}></div>
      {/* <div className={classes.triangle4}></div> */}
      <div className={classes.triangle3}></div>
      <div className={classes.triangle5}></div>
      <div className={classes.triangle6}></div>
      <div className={classes.sun}></div>
    </div>
  )
};

export default Forest;
