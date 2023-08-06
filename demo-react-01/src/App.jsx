import './App.css';
import ListaPersonas from "./components/ListaPersonas/ListaPersonas";

const listaPersonas = [
  { name: "Jorge Vega", age: 23 },
  { name: "Pedro Casillas", age: 28 },
  { name: "Michelle Margan", age: 30 },
  { name: "Diego Torres", age: 20 },
  { name: "Viviana Gibelli", age: 25 }
];  

function App() {

  return (
    <div className="App">
      <ListaPersonas lista = {listaPersonas} otraProp = "Holis" />
    </div>
  );
}

export default App
