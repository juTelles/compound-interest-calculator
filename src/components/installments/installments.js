import React from 'react';
import Installment from './installment';

export default function Installments({ resultsArray }) {
  let id = 0;
  return (
    <ul className="row">

      {resultsArray.map(result => {
      id++
      return <li key={id} className="col s12 m4 l3">
                <Installment result={result}/>
            </li>
      })
      }

    </ul>
  );
};
