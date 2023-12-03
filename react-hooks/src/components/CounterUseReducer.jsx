import { useSelector, useDispatch } from 'react-redux';
import * as actionsCreators from '../redux/actions/actions';  //* Importa todas las acciones

function CounterUseReducer() {

    const counter = useSelector(state => state.count); //* useSelector() es un hook que permite acceder al estado de redux
    const dispatch = useDispatch(); //* useDispatch() es un hook que permite acceder a dispatch()

    function increment() { 
        dispatch(actionsCreators.increment()) 
    }

    function decrement() {
        dispatch(actionsCreators.decrement()) 
    }
    
    function reset() {
        dispatch(actionsCreators.reset()) 
    }

    function fetchPost(counter) {
        dispatch(actionsCreators.fetchPost(counter)) 
    }

    return <div>
        <span>Contador: {counter}</span>
        <br />
        <div>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={() => fetchPost(counter)}>Enviar Número a API</button>
        </div>            
    </div>      
}

export default CounterUseReducer;
