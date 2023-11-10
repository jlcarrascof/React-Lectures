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

    render() { 
        console.log('Im in render');
        return <img src={this.props.src} alt="" />;
    }
}

export default Plantas;