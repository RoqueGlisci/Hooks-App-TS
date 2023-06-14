
//{todo} ->  se refiere a la desestructuración de la prop todo dentro del componente TodoItem.
// se puede acceder a las propiedades del objeto todo utilizando {todo.description}

//{todo}: {todo: Todo} indica que se espera que se pase una prop llamada todo al componente TodoItem, 
//y que esa prop debe ser un objeto que cumpla con la interfaz Todo
import { TodoItemProps } from '../interface/interface';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) => {//
  // console.log(todo.id);
  
  return (
    <li className="list-grup-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ' '}`}
          onClick={ () => onToggleTodo(todo.id)}
          aria-label="span"
        >{todo.description}</span>
        <button 
          className="btn btn-primary"
          onClick={() => onDeleteTodo(todo.id)}>
            Borrar
        </button> 
    </li>
  )
}
