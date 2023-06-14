import { ChangeEvent, useState } from "react"
import { Message } from './Message';

interface Form {
    username: string
    email: string
}

export const SimpleForm = () => {

    const [formState, setFormState] = useState<Form>({
        username: 'toto',
        email: 'toto@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target
        // console.log({name, value});
        setFormState({
            ...formState,
            [name]: value
        })
        
    } 

    // useEffect(() => {
      
      
    // }, [])//solo lo dispara una vez con [] o cada vez que cambie algo dentro del [x]
    
    // useEffect(() => {
        
        
    // }, [formState])

    // useEffect(() => {
        
        
    //   }, [email])

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="email@email.com"
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {
            username === "toto2" && <Message />
        }
    </>
  )
}
