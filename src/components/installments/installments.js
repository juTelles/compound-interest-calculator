import React from 'react'
import Installment from './installment'

export default function Installments({results}) {
  let id = 0
  return (
    <ul>
      {results.map( (result) => {
      id++
      return <li key={id}>
                <Installment result={result}/>
            </li>
    })}
    </ul>
  )
}
