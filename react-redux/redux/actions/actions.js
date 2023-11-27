import { INCREMENT, DECREMENT, RESET, GET_POST, RECEIVE_POST } from "./actionsTypes";
import axios from 'axios';

export function increment() { 
  return { type: INCREMENT };
}

export function decrement() { 
  return { type: DECREMENT };
}

export function reset() { 
  return { type: RESET };
}

export function getPost() { 
  return { type: GET_POST };
}

export function receivePost(dato) { //* accion sincrona
  return { type: RECEIVE_POST, payload: dato };
} 

export function fetchPost(valor) { //* accion asincrona
  return function(dispatch) {
    dispatch(getPost());
    axios(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then((response) => {
        console.log(response)
        return dispatch(receivePost(response.data))
      })
  } 
}
