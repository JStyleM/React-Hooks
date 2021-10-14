import React, { useContext } from 'react'
import { UserContext } from './UserContext'
export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext)
    const newUser = {
        id: 1213,
        name: 'Fabio',
    }

    console.log(user);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => setUser({...newUser})}>Login
            </button>
        </div>
    )
}
