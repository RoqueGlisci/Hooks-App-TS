import { useCounter } from "../hooks"
import { useMemo, useState } from 'react';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} itraciones realizadas`
}

export const MemoHook = () => {

    const {count, increment } = useCounter(4000)

    const [show, setShow] = useState<boolean>(true)

    const memorizedValue = useMemo(() => heavyStuff(count), [count])

  return (
    <>
        <h1>Count: <small>{count}</small></h1>

        <h4>{memorizedValue}</h4>

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