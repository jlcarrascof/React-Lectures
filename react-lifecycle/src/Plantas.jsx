import React from 'react';

class Plantas extends React.Component { 
    constructor(props) {
        super(props);
        return console.log('constructor');
    }

    // Método que se ejecuta antes de que el componente se monte en el DOM

    componentDidMount() { 
        console.log('Im in componentDidMount');
    }

    // Método para actualización de componentes
    componentDidUpdate(prevProps) { 
        console.log('Im the previous state', prevProps);
        if (this.props.src !== prevProps.src) { 
            return console.log('Im in componentDidUpdate - Componente actualizado', this.props.src);
        }
    }

    // Método para desmontar componentes
    componentWillUnmount() { 
        if (!this.props.montarComponente) { 
            return console.log('Im in componentWillUnmount - Componente desmontado!!!', this.props.montarComponente);
        }
    }
    
    render() { 
        console.log('Im in render');
        return <img src={this.props.src} alt="" />;
    }
}

export default Plantas;