import { Dispatch, SetStateAction, createContext } from "react";

interface User {
    id: number
    name: string
    email: string
}

interface UserContextValue {
    user: User
    setUser: Dispatch<SetStateAction<User>>
}

// export const UserContext = createContext<UserContextValue | undefined >(undefined)
export const UserContext = createContext<UserContextValue>({} as UserContextValue)
// export const UserContext = createContext()
console.log(UserContext);
