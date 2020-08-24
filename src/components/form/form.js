import React, { useState, useEffect } from 'react';
import Installments from '../installments/installments';

export default function Form() {

  const [initValue, setInitValue] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(0);
  const [resultsArray, setResultsArray] = useState([])



  useEffect(() => {
    const calculator = (month) => {
      let total = 0
      total = initValue * ((1 + (interest / 100)) ** month);
      return Number(total)
      };

    let month = 1;
    let arr = []

      for(let i = 1; i < months + 1; i++) {
      arr.push({ 
      monthsDefined: month,
      initialValue: initValue,
      finalValue: calculator(month),
      })
        month++; 
      }
      setResultsArray([...arr])
  }, [initValue, interest, months])
  
  // if (monthAdd === '+') {
  //   resultsArray.pop()
  // } else if (monthAdd === '-') {
  //   const month = months;
  //   const result = {
  //     monthsDefined: month,
  //     finalValue: calculator(),
  //     appliedInterest: Number((calculator() - initValue).toFixed(2)),
  //   }
  //   resultsArray.push(result);
  // } else {
  // setResultsArray([{
  //   monthsDefined: months,
  //   finalValue: calculator(),
  //   appliedInterest: Number((calculator() - initValue).toFixed(2)),
  // }])}


  const handleInitValue = (event) => {
    setInitValue(Number(event.target.value));
  };

  const handleInterest = (event) => {
    setInterest(Number(event.target.value));

  };

  const handleMonths = (event) => {
      setMonths(Number(event.target.value));
  };

  // useEffect(() => {
  //   const month = months
  //   const result = {
  //     monthsDefined: month,
  //     finalValue: calculator(),
  //     appliedInterest:  Number((calculator() - initValue).toFixed(2)),
  //   }
  //   resultsArray.push(result);
  // },[months])

  return (
    <div>
      value:
      <label htmlFor="">
        <input onChange={handleInitValue} value={initValue} type="number" name="" id="" />
      </label>
      <label htmlFor="">
        Interests:
        <input step='0.1' onChange={handleInterest} value={interest} type="number" name="" id="" />
      </label>
      <label htmlFor="">
        Months:
        <input onChange={handleMonths} value={months} min="0" type="number" name="" id="" />
      </label>
      <div>
        <Installments results={resultsArray} initValue={initValue}/>
      </div>

    </div>
  );
}
