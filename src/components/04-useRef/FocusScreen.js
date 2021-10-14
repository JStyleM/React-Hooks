import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleInputClick = () => {

        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <div className="form-group">
                <input
                    ref={ inputRef }
                    className="form-control"
                    placeholder="Nombre"
                />


                <button 
                    className="btn btn-primary mt-2"
                    onClick={ handleInputClick }
                >
                    Focus
                </button>
            </div>
        </div>
    )
}
