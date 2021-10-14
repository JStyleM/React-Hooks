
import React from 'react'
import { useState } from 'react';
import './Counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        contador1: 0,
        contador2: 0,
        contador3: 0,
        contador4: 0
    })
    
    // const {contador1, contador2, contador3, contador4} = state;
    console.log(state.contador1);
    return (
        <>
            <h1>Counter1 : { state.contador1 }</h1>
            <h1>Counter2 : { state.contador2 }</h1>
            <h1>Counter3 : { state.contador3 }</h1>
            <h1>Counter4 : { state.contador4 }</h1>

            <hr />

            <button className='btn btn-primary' 
                    onClick={ () => {
                        setState({...state, contador4: state.contador4 + 1})
                        }    
                    }> +1 
            </button>
        </>
    )
}


