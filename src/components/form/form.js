import React, { useState, useEffect } from 'react';
import Installments from '../installments/installments';

export default function Form() {

  const calculator = (currentInstallment) => {
    let total = 0;
    total = initialValue * ((1 + (interestRate / 100)) ** currentInstallment);
    return Number(total.toFixed(2));
  };

  const [initialValue, setInitialValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [installments, setInstallments] = useState('');
  const [resultsArray, setResultsArray] = useState([{
    installment: 0,
    initialValue: initialValue,
    finalValue: calculator(1),}]);

  useEffect(() => {
    const calculator = (currentInstallment) => {
      let total = 0;
      total = initialValue * ((1 + (interestRate / 100)) ** currentInstallment);
      return Number(total.toFixed(2));
    };
    
    let currentInstallment = 1;
    let arr = [];
    
    for (let i = 0; i < installments + 1; i++) {
      arr.push({
        installment: currentInstallment,
        initialValue: initialValue,
        finalValue: calculator(currentInstallment),
      });
      currentInstallment++;
    };

    setResultsArray([...arr]);
  }, [initialValue, interestRate, installments]);

  const handleInitialValue = (event) => {
    let value = Number(event.target.value);
    value = value <= 0 || isNaN(value) ? '' : value;
    setInitialValue(value);

  };
  const handleInterestRate = (event) => {
    let value = Number(event.target.value);
    value = value === 0 || isNaN(value) ? '' : value
    setInterestRate(value);
  };
  const handleInstallments = (event) => {
    let value = Number(event.target.value);
    value = value <= 0 || isNaN(value) ? '' : value
    setInstallments(value);
  };

  return (
    <div>
      <label htmlFor="initialValue">
      Initial Amount:
        <input onChange={handleInitialValue} value={initialValue} min="0" type="number" name="initialValue" id="initialValue" />
      </label>
      <label htmlFor="interestRate">
        Interest Rate:
        <input step='0.1' onChange={handleInterestRate} value={interestRate} type="number" name="interestRate" id="interestRate" />
      </label>
      <label htmlFor="installments">
        Installments:
        <input onChange={handleInstallments} value={installments} min="0" type="number" name="installments" id="installments" />
      </label>
      <div>
        <Installments resultsArray={resultsArray} initialValue={initialValue} />
      </div>
    </div>
  );
};
