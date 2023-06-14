//La anotación React.FC se utiliza para indicar que el componente 
//es una función de React que recibe props y devuelve un elemento React. FC significa "Functional Component
//interface TodoAddProps {onNewTodo: (newTodo: Todo) => void;}
//export const TodoAdd: React.FC<TodoAddProps> = ({ onNewTodo }) => {

import { FormEvent } from "react";
import { useForm } from "../../hooks"
import { InitValue } from '../interface/interface';

export const TodoAdd = ({onNewTodo}: {onNewTodo: (newTodo: InitValue) => void} ) => {
    
    
   const {description, onInputChange, onResetForm} =  useForm({
        description: ''//se encuentra la informacion que se va tipeado en el formulario o input
   })

   const onFormSubmit = (event: FormEvent<HTMLFormElement> ): void =>{
        
        event.preventDefault();
        
        if(description.length <= 1) return;

        const newTodo: InitValue = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        // console.log("parte 0");
        // console.log(newTodo);

        onNewTodo(newTodo)
        onResetForm()
   }

   
   

  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholder="Que hay que hacer"
            className="form-control" 
            name="description"
            value={description}
            onChange={onInputChange}
        />

        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
  )
}
