import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from './components/ListGroup'
function App() {
  const [count, setCount] = useState(0)

  return <div><ListGroup></ListGroup></div>
}

export default App
