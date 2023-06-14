import { render, screen } from "@testing-library/react"
import { HomePage } from "../../09-useContext/HomePage"
import { UserContext } from "../../09-useContext/context/UserContext"

describe('Prueba en HomePage', () => { 

    const user = {
        id: 1,
        name: 'toto'
    }


    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
            
        )
        // screen.debug()

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null')
        
    })

    test('debe de mostrar el componente CON el usuario', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
            
        )
        // screen.debug()

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())

        
    })
})