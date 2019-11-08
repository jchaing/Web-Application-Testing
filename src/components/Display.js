import React from 'react';

const Display = props => {
  return (
    <div>
      <p>Ball: {props.ball}</p>
      <p>Strike: {props.strike}</p>
      <p>Foul: {props.foul}</p>
      <p>Outcome: {props.outcome}</p>
    </div>
  )
}

export default Display
