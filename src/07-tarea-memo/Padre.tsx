
import { Hijo } from './Hijo'
import { useState, useCallback } from 'react';

export const Padre = () => {

    const numeros: number[] = [2,4,6,8,10];
    const [valor, setValor] = useState<number>(0);
    
    const incrementar = useCallback(
        ( num: number ) => {
        setValor( (v) => v + num )//toma el valor actual del state y le suma uno
    },
    [],
  )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
