// ---- JavaScript ----
// su funcion es agregar un nuevo objeto al arreglo ya existente 

// const initialState = [{
//     id:1,
//     todo: 'Recolectar piedras del alma',
//     done: false
//    }]
   
//    const todoReducer = (state = initialState, action = {}) => {
   
//     if(action.type === '[TODO] add todo'){
//     return [...state, action.payload]
//     }
   
//     return state//simepte tiene que retornar un estado
//    }
   
//    let todos = todoReducer();
   
//    const newTodo = {
//     id: 2,
//     todo: 'Recolectar piedra del poder'
//    }
   
//    const addTodoAction = {
//     type: '[TODO] add todo',
//     payload: newTodo
//    }
   
//    todos = todoReducer(todos, addTodoAction);
//    console.log({state: todos})


// ---- Typescript ----

// explicacion del "action: AddTodoAction = {} as AddTodoAction"
//En TypeScript, cuando defines parámetros de una función y quieres asignarles un valor predeterminado, 
//puedes especificar ese valor después del signo igual (=). En este caso, el parámetro action en la función todoReducer tiene un valor predeterminado de {} as Action.
// {} as Action es una forma de indicar al compilador de TypeScript que asuma que el objeto vacío ({}) tiene el tipo Action. 
// Esto se hace utilizando el operador as para realizar una "aserción de tipo" o "type assertion". 
// En esencia, estamos diciendo al compilador que trate el objeto vacío como si tuviera el tipo Action.
// La razón por la que se utiliza esto en el valor predeterminado es para evitar que action sea undefined. 
// Si no se proporciona ningún valor para action al llamar a todoReducer, se asignará el valor predeterminado, 
// que en este caso es un objeto vacío con el tipo Action. De esta manera, 
// evitamos que action sea undefined y podemos trabajar con él de manera segura en la lógica de la función.

interface Todo {
    id: number;
    todo: string;
    done: boolean;
}
  
const initialState: Todo[] = [{
    id: 1,
    todo: 'Recolectar piedras del alma',
    done: false
}];

interface AddTodoAction {
    type: '[TODO] add todo';
    payload: Todo;
}

// type Action = AddTodoAction;

const todoReducer = (state: Todo[] = initialState, action: AddTodoAction = {} as AddTodoAction): Todo[] => {
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
};

let todos: Todo[] = todoReducer();
// console.log({todos});

//------------------------------------------------------------
const newTodo: Todo = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: false
};

const addTodoAction: AddTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);// se le manda el nuevo todos(state) y el addTodoAction(action)

// console.log({ state: todos });
  