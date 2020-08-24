import React from 'react'

export default function Installment({result}) {
  
  const int = Number(result.finalValue - result.initialValue) 
  const intPercent = Number((int*100)/result.initialValue);


    return ( <div className="row">
      <div className="col s7 m5">
      <div className="card green">
        <div className="card-content white-text center">
        <span>{result.monthsDefined}</span> <br/>
        <span>{(result.finalValue).toFixed(2)}</span> <br/>
        <span>{int.toFixed(2)}</span> <br/>
        <span>{intPercent.toFixed(2)}%</span> 
        </div>
      </div>
    </div>
  </div>
)
}
