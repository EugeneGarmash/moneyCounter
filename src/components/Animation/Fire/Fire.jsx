import React from 'react';
import classes from './Fire.module.scss';

const Fire = () => {
  return (
    <div className={classes.fire}>
      <div className={classes.flames}>
        <div className={classes.flame}></div>
        <div className={classes.flame}></div>
        <div className={classes.flame}></div>
        <div className={classes.flame}></div>
      </div>
      <div className={classes.logs}/>
    </div>
  )
};

export default Fire;
