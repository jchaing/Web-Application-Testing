import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [foul, setFoul] = useState(0);
  const [outcome, setOutcome] = useState('');

  const ballFunc = () => {
    console.log('Ball');
    setOutcome('');
    if (ball < 3) {
      setBall(ball + 1);
    } else {
      setOutcome('Ball 4, Walked');
      setBall(0);
      setStrike(0);
      setFoul(0);
    }
  };

  const strikeFunc = () => {
    console.log('Strike');
    setOutcome('');
    if (strike < 2) {
      setStrike(strike + 1);
    } else {
      setOutcome("Strike 3, You're Out!!!");
      setBall(0);
      setStrike(0);
      setFoul(0);
    }
  };

  const foulFunc = () => {
    console.log('Foul');
    setOutcome('');
    if (foul < 3 && strike < 2) {
      setFoul(foul + 1);
      setStrike(strike + 1);
    } else if (foul < 3) {
      setFoul(foul + 1);
    }
  };

  const hitFunc = () => {
    setOutcome('');
    if (outcome !== true) {
      setOutcome('Base Hit!!!');
    }
    setBall(0);
    setStrike(0);
    setFoul(0);
  };

  return (
    <div>
      <Display ball={ball} strike={strike} foul={foul} outcome={outcome} />
      <button onClick={ballFunc}>Ball</button>
      <button onClick={strikeFunc}>Strike</button>
      <button onClick={foulFunc}>Foul</button>
      <button onClick={hitFunc}>Hit</button>
      {/* <button onSubmit={}>Swing</button> */}
    </div>
  );
};

export default Dashboard;
