import { useState } from 'react';

function Contador() { 
   const [counter, setCounter] = useState(0);
   
   function handleClick() {
       setCounter(counter + 1);
   }

   return ( 
    <div>
        <h3>Contador: {counter}</h3>
        <button onClick={handleClick}>Suma uno!</button>
    </div>
   );     
}

export default Contador;