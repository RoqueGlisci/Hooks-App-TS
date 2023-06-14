import { useState } from "react"

interface Count {
    count1: number
    count2: number
    count3: number
}

export const CounterApp = () => {

    const [ {count1, count2, count3}, setCount] = useState<Count>({
        count1: 10,
        count2: 20,
        count3:  30,
    })

  return (
    <>
        <h1>Counter: {count1}</h1>
        <h1>Counter: {count2}</h1>
        <h1>Counter: {count3}</h1>
        <hr />

        <button
        className="btn btn-outline-primary" 
            onClick={() => setCount({count2, count3, count1: count1 + 1 })}>
                +1
        </button>
    </>
  )
}
