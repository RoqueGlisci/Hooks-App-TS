import { useCounter } from "../hooks"
import { Small } from './Small';
import { useState } from 'react';


export const Memorize = () => {

    const {count, increment } = useCounter(10)

    const [show, setShow] = useState<boolean>(true)

  return (
    <>
        <h1>Count: <Small value={count}/></h1>

        <button 
            className="btn btn-primary"
            onClick={() => increment(1)}>
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
