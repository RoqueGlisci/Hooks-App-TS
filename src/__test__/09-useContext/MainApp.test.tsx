import {render, screen} from '@testing-library/react';
import { MainApp } from '../../09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';



describe('Prueba en LoginPage', () => { 

    test('debe de mostrar el HomePage', () => { 
        render( 
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy()
    })

    test('debe de mostrar el LoginPage', () => { 
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy()
    })
})