import { connect } from 'react-redux';
import * as actionsCreators from '../redux/actions/actions';  //* Importa todas las acciones

function Counter({counter}) {
    console.log(counter);
    return <div>
        <span>Contador: {counter}</span>
        <br />

        <button>Incrementar</button>
        <button>Decrementar</button>
        <button>Resetear</button>
        <button>Enviar Número a API</button>        
    </div>      
}

function mapStateToProps(state) { //* Hace alusión a getState()
    return {
        counter: state.count
    }
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
        fetchPost: function() { 
            dispatch(actionsCreators.fetchPost())
        }    
    }
}   

export default connect(mapStateToProps)(Counter);
