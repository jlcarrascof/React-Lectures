import React from "react";

class PersonaItem extends React.Component {
    constructor(props) {
        super(props);
    }
           
    render() {
        return (
            <div>
            <hr />
            <p>Nombre: { this.props.name }</p>
            <p>Edad: { this.props.age }</p>
            <hr />
            </div>
        );
    }
}

/*
const PersonaItem = (props) => { 
    return (
        <div>
        <hr />
        <p>Nombre: { props.name }</p>
        <p>Edad: { props.age }</p>
        <hr />
        </div>
    );
}
*/

export default PersonaItem;