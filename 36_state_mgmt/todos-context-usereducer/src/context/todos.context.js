// todos
// all methods to interact w/ todos
import React, {createContext, useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer';
// import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: 'Mow lawn', completed: false },
    { id: 2, task: 'Release lady bugs', completed: true }
]
export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    // const todosStuff = useTodoState(defaultTodos)
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}
