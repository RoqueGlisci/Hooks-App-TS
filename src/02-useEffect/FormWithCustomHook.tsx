
import { useForm } from "../hooks/useForm"
// import { Message } from './Message';

interface Form {
    username: string
    email: string
    password: string
}

export const FormWithCustomHook = () => {

    const {username, email, password,onResetForm, formState, onInputChange} = useForm<Form>({
        username: '',
        email: '',
        password: ''
    })
    
    

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

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <button 
            onClick={onResetForm} 
            className="btn btn-primary mt-2">
                Borrar
        </button>

        {/* <pre>{JSON.stringify(password)}</pre> */}

        {/* {
            username === "toto2" && <Message />
        } */}
    </>
  )
}