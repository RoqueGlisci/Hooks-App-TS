import { InitValue, Acction } from './interface/interface';

//la accion que se le manda al useReducer
export const todoReducer = (initialState: InitValue[], action: Acction) => {
    // console.log('--- 0');
    
    // console.log(action.payload);
    // console.log(initialState);
    
  switch (action.type) {
    case 'Add Todo'://type
        return [...initialState, action.payload]//valot inicial + payload
    
    case 'Remove Todo'://type
        return initialState.filter(todo => todo.id !== action.payload)

    case 'Toggle Todo'://type
        return initialState.map(todo => {
            if(todo.id === action.payload){
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo
        })
    default:
        return initialState
  }
}
