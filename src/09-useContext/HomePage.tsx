import { useContext } from "react"
import {UserContext} from './context/UserContext';

export const HomePage = () => {

  // const user = useContext(UserContext)?.user// el ?.user. Esto asume que el valor real proporcionado por el contexto tiene una propiedad llamada user.
  const {user} = useContext(UserContext)
  return (
    <>
        <h1>HomePage <small>{user?.name}</small></h1>
        <hr />

        <pre aria-label="pre">
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}
