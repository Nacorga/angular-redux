import { IAppState } from './interfaces/state';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export const INITIAL_STATE: IAppState = {
    todos: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).todos : [],
    lastUpdate: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).lastUpdate : null
};

const setLocalState = (state: IAppState) => {
    localStorage.setItem('state', JSON.stringify(state));
};

export function rootReducer(state, action) {

    let newState: IAppState = INITIAL_STATE;

    switch (action.type) {

        case ADD_TODO:

            action.todo.id = state.todos.length + 1;

            newState = Object.assign({}, state, {
                todos: state.todos.concat( Object.assign({}, action.todo) ),
                lastUpdate: new Date()
            });

            setLocalState(newState);

            return newState;

        case TOGGLE_TODO:

            const todo = state.todos.find(item => item.id === action.id);
            const index = state.todos.indexOf(todo);

            newState = Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });

            setLocalState(newState);

            return newState;

        case REMOVE_TODO:

            newState = Object.assign({}, state, {
                todos: state.todos.filter(item => item.id !== action.id),
                lastUpdate: new Date()
            });

            setLocalState(newState);

            return newState;

        case REMOVE_ALL_TODOS:

            newState = Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });

            setLocalState(newState);

            return newState;

    }

    return state;

}
