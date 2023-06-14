import {act, renderHook} from '@testing-library/react'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en el useCounter', () => {
    test('deve de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter(0))
        // console.log(result);
        const {count, increment, decrement, initV} = result.current
        expect(count).toBe(0)
        expect(count).toEqual(expect.any(Number))
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(initV).toEqual(expect.any(Function))
    })
    
    test('deve de generar el count con el valor 100', () => {
        const { result } = renderHook(() => useCounter(100))
        expect(result.current.count).toBe(100)
    })

    test('debe de incrementer el contador', ()=> {
        const {result} = renderHook(() => useCounter(0))
        const { increment} = result.current

        act(() => {//act es para disparar la funcion
            increment(1);
            increment(2);
        })
        expect(result.current.count).toBe(3) //current contiene el valor actual
    })

    test('debe de decrementer el contador', ()=> {
        const {result} = renderHook(() => useCounter(0))
        const { decrement} = result.current

        act(() => {//act es para disparar la funcion
            decrement(1);
            decrement(2);
        })
        expect(result.current.count).toBe(0)//current contiene el valor actual
    })
    
    test('debe de reset el contador', ()=> {
        const {result} = renderHook(() => useCounter(0))
        const { initV} = result.current

        act(() => {//act es para disparar la funcion
            initV()
        })
        expect(result.current.count).toBe(0)//current contiene el valor actual
    })
})