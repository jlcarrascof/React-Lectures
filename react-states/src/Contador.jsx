import { useState } from 'react';

function Contador() { 
   const [counter, setCounter] = useState(0);
   
   return ( 
    <div>
        <h3>Contador: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Suma uno!</button>
    </div>
   );     
}

export default Contador;