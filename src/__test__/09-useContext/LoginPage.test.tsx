import {fireEvent, render, screen} from '@testing-library/react';
import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';


describe('Prueba en LoginPage', () => { 

    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
            
        )
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de mostrar el setUser cuando se hace click en el boton', () => { 
        const setUserMock = jest.fn()
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
            
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(setUserMock).toHaveBeenCalledWith({"email": "sdaf@email.com", "id": 123, "name": "Huan"})
        
    })
})