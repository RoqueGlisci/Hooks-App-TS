// import { useReducer, useEffect } from 'react';
// import {todoReducer} from "./todoReducer"
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from './hooks/useTodo';

// interface initValue {
//     id: number;
//     description: string;
//     done: boolean;
// }

// const initialState: initValue[] = [
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del alma',
//     //     done: false
//     // },
//     // {
//     //     id: new Date().getTime() * 3,
//     //     description: 'Recolectar la piedra del tiempo',
//     //     done: false
//     // }
// ]

// interface Todo {
//     id: number;
//     done: boolean;
//     description: string;
// }

// el valor debuelto puese ser strin o null
//esta funcion se despara cuando se refresca la pagina
// const init = (): Todo[] => {
//     // console.log('--- 2');
    
//     const storedData = localStorage.getItem('todos');
//     return (storedData !== null) ? JSON.parse(storedData) : [];
// }

export const TodoApp = () => {
    const {todos, todosCount, todosPending, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo()
    //crear custom hook useTodo
    //va a usar -> todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
    //se va a desestructurar lo que viene de useTodo: const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos()
    //tabien va a grabar en el local storage, va a tener la funcion init y useReducer

    // const [todos, dispatch] = useReducer(todoReducer, initialState, init )//(acction, initialValue)

    // useEffect(() => {
    //     // console.log('--- 1');
        
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }, [todos])
    
    
    // console.log('parte 2');
    // console.log({todos});
    
    // const handleNewTodo = (todo: initValue): void => {
    //     // console.log({todo}); 
    //    const action = {
    //         type: 'Add Todo',
    //         payload: todo 
    //    }

    //    dispatch(action)
    // }

    // const handleDeleteTodo = (id: initValue) => {
    //     // console.log({id});
    //     dispatch({
    //         type: 'Remove Todo',
    //         payload: id
    //     })
    // }

    // const handleToggleTodo = (id: initValue) => {
    //     console.log({id});
    //     dispatch({
    //         type: 'Toggle Todo',
    //         payload: id
    //     })
    // }

  return (
    <>
        <h1>Todo App: {todosCount} <small>pendientes: {todosPending}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                />
                
            </div>

            <div className="col-5">
                
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo(todo)*/}
                {/* {id: new Date()..., description: '', done:false} */}
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/* Fin TodoAdd */}
            </div>
        </div>

        
    </>
  )
}
// function useTodos(): { todos: any; handleNewTodo: any; handleDeleteTodo: any; handleToggleTodo: any; } {
//     throw new Error('Function not implemented.');
// }

