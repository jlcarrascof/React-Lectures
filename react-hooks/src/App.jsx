import './App.css'
import Counter from './components/Counter'
import CounterUseReducer from './components/CounterUseReducer'
import DemoUseRef from './components/DemoUseRef'
import Post from './components/Post'

function App() {
  return <>
    <Counter />
    <br />
    <Post />
    <br />
    <CounterUseReducer />
    <br />
    <DemoUseRef />
  </>
}

export default App
