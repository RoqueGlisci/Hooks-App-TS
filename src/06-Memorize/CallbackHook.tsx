import { useCallback, useState, useEffect } from 'react';
import {ShowIncrement} from './ShowIncrement';


export const CallbackHook = () => {

    const [count, setCount] = useState<number>(10)

    const incrementPrimary = useCallback(
      (value: number) => {
        setCount((c) => c + value)//toma el valor actual del state y le suma uno 
      },
      [],
    )

    useEffect(() => {
    //   incrementPrimary()
    }, [incrementPrimary])
    
    

    // const incrementPrimary = (): void => {
    //     setCount(count + 1)
    // }

  return (
    <>
        <h1>useCallback Hook: {count}</h1>
        <hr />

        <ShowIncrement increment={incrementPrimary}/>
    </>
  )
}
