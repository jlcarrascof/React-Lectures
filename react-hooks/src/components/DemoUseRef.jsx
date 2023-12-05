import { useRef } from 'react';

function DemoUseRef() {
    const inputElem = useRef(null);

    function handleClick() {
        inputElem.current.focus();
    }

    return <div>
        <h3>Hook useRef</h3> 
        <input type="text" ref={inputElem} />
        <button onClick={handleClick}>Focus en el Input</button>
    </div>
}

export default DemoUseRef;