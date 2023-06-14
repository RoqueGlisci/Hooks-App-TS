
export interface InitValue {
    id: number;
    description: string;
    done: boolean;
}

export type Acction = 
    | {type: 'Add Todo', payload: InitValue }
    | {type: 'Remove Todo', payload: number }
    | {type: 'Toggle Todo', payload: number }


export interface TodoListProps {
    todos: InitValue[] ;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void
}

export interface TodoItemProps {
    todo: InitValue;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void
  }