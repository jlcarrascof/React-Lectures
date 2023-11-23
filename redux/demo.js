// * 1 Importar redux
const { createStore } = require('redux')

// * 2 - Guardar el método createStore
// const createStore = _createStore;

// * Tipos de acción
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

// * Estructura del estado global y reducer
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

// * Crear store
const store = createStore(reducer)
console.log(store);

// * Usamos el método subscribe
store.subscribe(()=>{
    console.log('Suscripción:', store.getState());
})

// * Creamos las actions creators
function addTodo(text){
    return {
        type:ADD_TODO,
        payload:text
    }
}

// console.log(addTodo('estudiar Redux'));
function removeTodo(text){
    return {
        type: REMOVE_TODO,
        payload:text
    }
}

// * Dispatch
store.dispatch(addTodo('comprar pan'))
store.dispatch(addTodo('correr'))
store.dispatch(removeTodo('correr'))

console.log(store.getState());
store.dispatch(addTodo('dormir'))
store.dispatch(addTodo('salir temprano'))

console.log(store.getState());
store.dispatch(removeTodo('dormir'))

console.log(store.getState());

document.querySelector('#btnAdd').addEventListener('click', ()=> console.log('click'))