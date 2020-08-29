import React from 'react';
import Installment from './installment';

export default function Installments({ resultsArray }) {
  let id = 0;
  return (
    <ul>
    
      {resultsArray.map(result => {
      id++
      return <li key={id}>
                <Installment result={result}/>
            </li>
      })
      }

    </ul>
  );
};
