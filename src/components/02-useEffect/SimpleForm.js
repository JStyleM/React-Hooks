import React, { useState, useEffect } from 'react'

import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // No cambia nada solo se ejecuta una vez
    useEffect( () => {
        // console.log('Hola');
    }, []);

    // Se ejecuta cuando cambia el formState
    useEffect( () => {
        // console.log('Cambio en el formState');
    }, [formState]);

    // Se ejecuta solo cuando cambia el email
    useEffect( () => {
        // console.log('Cambio el Email');
    }, [email]);

    const handleInputChange = (e) => {
        // console.log(e.target);
        setformState({
            ...formState,
            [e.target.name]: e.target.value, 
        })
    }

    return (
        
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="enail@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name==='123') && <Message /> }

        </>
    )
}
