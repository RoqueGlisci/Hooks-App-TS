import { UserContext } from "./UserContext"
import { useState } from 'react';

// const user = {
//     id: 123,
//     name: 'toto',
//     email: 'toto@hotmail.com'
// }

interface User {
    id: number
    name: string
    email: string
}

// interface UserContextValue {
//     user?: User
//     setUser?: React.Dispatch<React.SetStateAction<User>>
// }

interface props {
    children: JSX.Element | JSX.Element[]// es para que pueda recibir 1 o mas elementos
}

export const UserProvider = ({children}: props) => {

    const [user, setUser] = useState<User>({} as User)
    

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    //     {children}      
    // </UserContext.Provider>

    <UserContext.Provider value={{ user, setUser }}>
        {children}      
    </UserContext.Provider>
    
  )
}
