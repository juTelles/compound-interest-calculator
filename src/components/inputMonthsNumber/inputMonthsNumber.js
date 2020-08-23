import React, { useState } from 'react';

export default function InputMonthsNumber() {
  const [months, setMonths] = useState(0);

  const handleMonths = (event) => {
    setMonths(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="">
        Months:
        <input onChange={handleMonths} value={months} min="1" type="number" name="" id="" />
      </label>
    </div>
  );
}
