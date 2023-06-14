import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas de MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        count: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button',{name: 'Next quote'}) as HTMLButtonElement
        expect(nextButton.disabled).toBeTruthy() //evalua el estado inicial del componente
        
        // screen.debug()
     })

     test('deve de mostrar un quote', () => { 
        useFetch.mockReturnValue({
            data: [{author: 'toto', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks/>)
        expect(screen.getByText('hola mundo')).toBeTruthy()
        expect(screen.getByText('toto')).toBeTruthy()
        // screen.debug()
        const nextButton = screen.getByRole('button',{name: 'Next quote'}) as HTMLButtonElement
        expect(nextButton.disabled).toBeFalsy() //es este puento el boton deja de existir
      })

      test('deve de mostrar un quote', () => { 

        
        useFetch.mockReturnValue({
            data: [{author: 'toto', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        })
        

        render( <MultipleCustomHooks/>)
        const nextButton = screen.getByRole('button',{name: 'Next quote'}) as HTMLButtonElement
        fireEvent.click(nextButton)
        useCounter
        expect(mockIncrement).toHaveBeenCalled()
      })
 })