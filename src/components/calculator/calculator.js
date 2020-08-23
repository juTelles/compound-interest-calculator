import React from 'react';
import InputInicialValue from '../inputInicialValue/inputInicialValue.js';
import InputInterestPercentage from '../inputInterestPercentage/inputInterestPercentage.js';
import InputMonthsNumber from '../inputMonthsNumber/inputMonthsNumber.js';

export default function Calculator() {
  return (
    <div>
      <InputInicialValue value="3" />
      <InputInterestPercentage />
      <InputMonthsNumber />
    </div>
  );
}
