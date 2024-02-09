import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from './components/ListGroup'
import MultiComponent2 from './components/MultiComponentWay2'
import WorkingComponent from './components/WorkingComponent'
function App() {
  const [count, setCount] = useState(0)

  return <div><WorkingComponent></WorkingComponent></div>
}

export default App
