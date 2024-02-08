import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from './components/ListGroup'
import MultiComponent2 from './components/MultiComponentWay2'
function App() {
  const [count, setCount] = useState(0)

  return <div><MultiComponent2></MultiComponent2></div>
}

export default App
