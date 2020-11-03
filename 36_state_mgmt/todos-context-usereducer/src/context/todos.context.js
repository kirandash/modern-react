// todos
// all methods to interact w/ todos
import React, {createContext } from 'react';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';
// import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: 'Mow lawn', completed: false },
    { id: 2, task: 'Release lady bugs', completed: true }
]

// Separate contexts for Todos and dispatch to avoid re-renders - performance optimization
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    // const todosStuff = useTodoState(defaultTodos)
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
