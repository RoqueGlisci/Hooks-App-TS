import { useCounter } from "../hooks/useCounter"


export const CoutnerWhitCustomHook = () => {

    const {count, increment, decrement, initV} = useCounter()

  return (
    <>
        <h1>Counter with hook: {count}</h1>
        <hr />
        
        <button 
            className="btn btn-outline-primary"
            onClick={() => increment(2)}>
                +1
        </button>
        <button 
            className="btn btn-outline-primary"
            onClick={() => decrement(1)}>
            -1
        </button>
        <button 
            className="btn btn-outline-primary"
            onClick={initV}>
                rest
        </button>
    
    </>
  )
}
