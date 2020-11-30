import React, { useState } from 'react';

const Counter = () => {

  // const [counterState, setCounterPassed] = useState({
  //   secondsPassed: 0,
  //   counterValue: 0,
  //   paused: counterIsActive,
  // });

  // const startInterval = useCallback(
  //   () => {
  //     timerId.current = setInterval(
  //       () => {
  //         setCounterPassed(state =>
  //           !counterIsActive
  //             ? state
  //             : {
  //                 ...state,
  //               counterValue: state.counterValue + counterSalaryStep,
  //               secondsPassed: state.secondsPassed + counterTimeStep / 1000,
  //             }
  //         );
  //       },
  //       counterTimeStep
  //     )
  //   },
  //   [counterIsActive, counterSalaryStep, counterTimeStep]
  // );

  // useEffect(() => {
  //   startInterval();
  //   return () => clearTimeout(timerId.current);
  // }, [startInterval]);

  return null;
}

export default Counter;