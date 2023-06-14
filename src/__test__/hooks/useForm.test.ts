import {renderHook, act} from '@testing-library/react';
import { useForm } from "../../hooks"
import {ChangeEvent} from 'react';

const initialForm = {
    name: 'Roque',
    email: 'roque@gmail.com'
}

describe('Pruebas en useForm', () => {
    test('deve de regresar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        // console.log(result.current);
        expect(result.current).toEqual({  
            name: 'Roque',
            email: 'roque@gmail.com',
            formState: { name: 'Roque', email: 'roque@gmail.com' },
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
        })
    })

    test('deve de regresar los valores por defecto', () => {
        const newValue = 'Toto'
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current

        // const event = {
        //     target: {
        //       value: newValue,
        //       name: 'name',
        //     },
        // } as ChangeEvent<HTMLInputElement>;
       
        act(() => {//act es para disparar la funcion
            onInputChange({target: {value: newValue, name: 'name'},} as ChangeEvent<HTMLInputElement>)
        })

        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)
    })

    
    test('deve de regresar los valores por defecto', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const {onResetForm} = result.current
       
        act(() => {//act es para disparar la funcion
            onResetForm()
        })

        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toEqual(initialForm.name)
    })
})