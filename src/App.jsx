import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState('')
  function handleChange(e){
    setText(e.target.value)
  }

  return (
    <div>
      <h1>
        Speed Typing Game
      </h1>
      <textarea 
        onChange = {handleChange}
        value={text}/>
    
      
      <h4>Time remaining:</h4>
      <button>Start Game</button>
      <h1>Word Count:??</h1>

 
    </div>
  )
}

export default App
