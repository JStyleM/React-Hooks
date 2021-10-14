import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente Montado');
        return () => {
            // Se realiza la limpieza del componente
            console.log('Componente Desmontado');
        }
    }, [])

    return (
        <div>
            <h3>Te mando un mensaje</h3>
        </div>
    )
}
