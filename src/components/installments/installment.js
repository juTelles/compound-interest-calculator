import React from 'react';

export default function Installment({ result }) {



  const { installment, finalValue, initialValue, interestRate } = result;

  const difference = finalValue - initialValue;
  const differencePercentage = ((difference * 100) / initialValue).toFixed(2);

  return (
  <div className="row">
    <div className="col s12 m12">
      <div className={finalValue > 0 ? "card green" : "card red"}>
        <div className="card-content white-text center">
          <span>{installment}º MONTH </span> <br />
          <span>Total: R${finalValue}</span> <br />
          <span>Difference: R${difference.toFixed(2)}</span> <br />
          <span>Interest Applied: {isNaN(differencePercentage) ? 0 : differencePercentage}%</span>
        </div>
      </div>
    </div>
  </div>
  )
}
