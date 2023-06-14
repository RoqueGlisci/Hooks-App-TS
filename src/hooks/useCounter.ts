import { useState } from "react"


export const useCounter = (initValue: number) => {

    const [count, setCount] = useState<number>(initValue)

    const increment = (value: number): void => {
        // setCount( count + value)
        setCount((current) => current + value)// current es el valor actual
    }

    const decrement = (value: number): void => {
        if(count > 0){
            // setCount(count - value)
            setCount((current) => current - value) // current es el valor actual
        }
        
    }

    const initV = (): void => {
        setCount(initValue)
    }

  return {
    count,
    increment,
    decrement,
    initV
  }
}
