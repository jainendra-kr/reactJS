import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if(counter <20){
      setCounter(counter+1)
    }
    // console.log(counter);
  }
const removeValue = () => {
  if(counter > 0){
    setCounter(counter-1)
  }
}

  return (
    <>
      <h1>hello react</h1>
      <h3>count value {counter}</h3>


      <button onClick = {addValue}>Add value</button>
      <br />


      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
