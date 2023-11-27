import { INCREMENT, DECREMENT, RESET, GET_POST, RECEIVE_POST } from "./actionsTypes";

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

export function receivePost(dato) { 
  return { type: RECEIVE_POST, payload: dato };
} 

export function fetchPost() {
  return dispatch => {
    dispatch(getPost());
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)))
  }
}
