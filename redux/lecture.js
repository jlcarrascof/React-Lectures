// 1.- Importar Redux.

const redux = require('redux');

// 2.- Guardar el método createStore.

const createStore = redux.createStore;

// 3.- Tipos de acción.

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// 4.- Estructura del estado global y reducer.

const initialState = {
    todos: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                todos:[...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((text, i) => i !== action.payload)
            }
        default:
            return state;
    }
}

// 5.- Crear store.
