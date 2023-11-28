import { connect } from 'react-redux';
import * as actionsCreators from '../actions';  

function Counter() {
    return <div>
        <span>Contador:</span>
        <button>Incrementar</button>
        <button>Decrementar</button>
        <button>Resetear</button>
        <button>Enviar Número a API</button>        
    </div>      
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default Counter;
