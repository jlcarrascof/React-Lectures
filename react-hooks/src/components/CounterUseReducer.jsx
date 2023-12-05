import { useSelector, useDispatch } from 'react-redux';
import { useReducer } from 'react';
import * as actionsCreators from '../redux/actions/actions';  //* Importa todas las acciones
import { INCREMENT, DECREMENT, RESET, GET_POST, RECEIVE_POST } from './actions/actionsTypes';

const initialState = {
    count: 0,
    loading: false,
    post: {},
}
  
function reducerComponente(state = initialState, { type, payload }) {
    switch (type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { ...state, count: 0 };
      case GET_POST:
        return { ...state, loading: true };
      case RECEIVE_POST:
        return { ...state, loading: false, post: payload };
      default:
        return { ...state };
    }
}

function CounterUseReducer() {

    const counter = useSelector(state => state.count); //* useSelector() es un hook que permite acceder al estado de redux
    const dispatch = useDispatch(); //* useDispatch() es un hook que permite acceder a dispatch()

    const [counterComp, dispatchComp] = useReducer(reducerComponente, initialState);

    function increment() { 
        dispatchComp(actionsCreators.increment()) 
    }

    function decrement() {
        dispatchComp(actionsCreators.decrement()) 
    }
    
    function reset() {
        dispatchComp(actionsCreators.reset()) 
    }

    function fetchPost(counter) {
        dispatchComp(actionsCreators.fetchPost(counter)) 
    }

    return <div>
        <span>Contador use Reducer: {counterComp}</span>
        <br />
        <div>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={() => fetchPost(counterComp)}>Enviar Número a API</button>
        </div>            
    </div>      
}

export default CounterUseReducer;
