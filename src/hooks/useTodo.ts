import {useReducer, useEffect} from 'react';
import {todoReducer} from '../todoReducer';
import { InitValue } from '../interface/interface';

const initialState: InitValue[] = []

// el valor debuelto puese ser strin o null
//esta funcion se despara cuando se refresca la pagina
const init = (): InitValue[] => {
    const storedData = localStorage.getItem('todos');
    return (storedData !== null) ? JSON.parse(storedData) : [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init )//(acction, initialValue)

    useEffect(() => {
        // console.log('--- 1');
        
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    
    // console.log('parte 2');
    // console.log({todos});
    
    const handleNewTodo = (todo: InitValue): void => {
        // console.log({todo}); 
    //    const action = {
    //         type: 'Add Todo',
    //         payload: todo 
    //    }
       dispatch({
            type: 'Add Todo',
            payload: todo 
       })
    }

    const handleDeleteTodo = (id: number ): void => {
        console.log({id});
        
        dispatch({
            type: 'Remove Todo',
    
            payload: id
        })
    }

    const handleToggleTodo = (id: number): void => {
        // console.log({id});
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }


  return {
    todos,
    todosCount: todos.length, 
    todosPending: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
