import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>

                    )
            }

            <button onClick={ () => increment(1) } className="btn btn-primary">
                Next Quote
            </button>

        </div>
    )
}
