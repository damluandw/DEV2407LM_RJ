import React, { useReducer, useState } from 'react'

function Reducer() {
   const reducer = (state, action) =>{
    switch(action){
        case 'UP_ACTION':
            return state +1;
        case 'DOWN_ACTION':
            return state -1;
        default:
            return new Error('action không hợp lệ')
    }
   }
   const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch('UP_ACTION')}>UP</button>
        <button onClick={()=>dispatch('DOWN_ACTION')}>DOWN</button>
    </div>
  )
}

export default Reducer