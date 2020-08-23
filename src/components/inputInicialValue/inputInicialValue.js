import React, { useState } from 'react';

export default function InputInicialValue(props) {
  const [inicialValue, setInicialValue] = useState(0);

  const handleInicialValue = (event) => {
    setInicialValue(Number(event.target.value));
  };
  
  return (
    <div>
      <label htmlFor="">
        value:
        <input onChange={handleInicialValue} value={inicialValue} type="number" name="" id="" />
      </label>
    </div>
  );
}
