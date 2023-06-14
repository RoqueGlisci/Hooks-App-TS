import { TodoItem } from "./TodoItem"
import { TodoListProps } from '../interface/interface';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {//
    // console.log('parte 3');
    // console.log(onToggleTodo);

  return (
    <ul className="list-group">
        {
            todos.map(todo => (
               <TodoItem 
               key={todo.id} 
               todo={todo} 
               onDeleteTodo={onDeleteTodo}
               onToggleTodo={onToggleTodo}
            />
               
            ))
        }
    </ul>
  )
}
