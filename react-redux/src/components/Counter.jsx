import { connect } from 'react-redux';
import * as actionsCreators from '../redux/actions/actions';  //* Importa todas las acciones

function Counter({counter}) {
    console.log(counter);
    return <div>
        <span>Contador:</span>
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

export default connect(mapStateToProps)(Counter);
