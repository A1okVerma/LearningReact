import { useState } from 'react'


import './App.css'





function App() {
  let [counter,setCounter] = useState(15)

  const addValue= () => {
    counter = counter + 1
    setCounter(counter)
    console.log("counter: ",counter);
    
  }
  const removeValue = () => {
    counter = counter -1 
    setCounter(counter)
    console.log("counter: ",counter);
  }
  
  return (
    <>
      <h1>Hello </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
