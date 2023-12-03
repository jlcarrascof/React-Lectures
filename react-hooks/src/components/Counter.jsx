import { connect, useSelector } from 'react-redux';
import * as actionsCreators from '../redux/actions/actions';  //* Importa todas las acciones

function Counter({ increment, decrement, reset, fetchPost }) {

    const counter = useSelector(state => state.count); //* useSelector() es un hook que permite acceder al estado de redux

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

function mapDispatchToProps(dispatch) { //* Hace alusión a dispatch()
    return {
        increment: function() {
            dispatch(actionsCreators.increment())
        },    
        decrement: function() {
            dispatch(actionsCreators.decrement())
        },    
        reset: function() {
            dispatch(actionsCreators.reset())
        },    
        fetchPost: function(counter) { 
            dispatch(actionsCreators.fetchPost(counter))
        }    
    }
}   

export default connect(null, mapDispatchToProps)(Counter);
