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
                todos: state.todos.filter((text) => text !== action.payload)
            }
        default:
            return state;
    }
}

// 5.- Crear store.

const store = createStore(reducer);
console.log(store);

// 6.- Usamos el método subscribe.

store.subscribe(()=>{
    console.log('Suscripción:', store.getState());
})

// 7.- Creamos las actions creators.

function addTodo (text){
    return {
        type:ADD_TODO,
        payload:text
    }
}

// console.log(addTodo ('estudiar Redux'));

function removeTodo (text){
    return {
        type:REMOVE_TODO,
        payload:text
    }
}

// 8.- Dispatch.

store.dispatch(addTodo ('comprar pan'));
store.dispatch(addTodo ('correr'));
store.dispatch(removeTodo ('correr'));

console.log(store.getState());
store.dispatch(addTodo ('dormir'));
store.dispatch(addTodo ('salir temprano'));

console.log(store.getState());
store.dispatch(removeTodo ('dormir'));

