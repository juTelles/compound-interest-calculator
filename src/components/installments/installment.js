import React from 'react';

export default function Installment({ result }) {

  const { installment, finalValue, initialValue } = result;

  const difference = finalValue - initialValue;
  const differencePercentage = ((difference * 100) / initialValue).toFixed(2);

  return (
  <div className="row">
    <div className="col s7 m7">
      <div className="card green">
        <div className="card-content white-text center">
          <span>{installment} </span> <br />
          <span>R${finalValue}</span> <br />
          <span>R${difference.toFixed(2)}</span> <br />
          <span>{isNaN(differencePercentage) ? 0 : differencePercentage}%</span>
        </div>
      </div>
    </div>
  </div>
  )
}
