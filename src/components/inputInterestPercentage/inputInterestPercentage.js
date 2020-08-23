import React, { useState } from 'react';

export default function InputInsterestPercentage() {
  const [interest, setInterest] = useState(0);
  
  const handleInterest = (event) => {
    setInterest(Number(event.target.value));
  };
  
  return (
    <div>
      <label htmlFor="">
        Interests:
        <input step='0.1' onChange={handleInterest} value={interest} type="number" name="" id="" />
      </label>
    </div>
  );
}
