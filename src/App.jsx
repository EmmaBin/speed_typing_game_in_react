/**
 * when start game btn is clicked:
 * 1. Time remaining start to countdown
 * 2. when time remaining is 0, word count displayed the how many words 
 * 
 */
import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(10)

  function handleChange(e){
    setText(e.target.value)
  }
  
  // 1. need to trim the empty space after the last word
  // 2. only count the word that is not empty space using filter
  function wordCount(){
    const wordArr = text.split(' ')
    let total = 0
    for (let word in wordArr){
      total ++
    }
    console.log(total)
    return  total

  }

  return (
    <div>
      <h1>
        Speed Typing Game
      </h1>
      <textarea 
        onChange = {handleChange}
        value={text}/>
    
      
      <h4>Time remaining:{timeRemaining}</h4>
      <button onClick = {wordCount}>Start Game</button>
      <h1>Word Count:??</h1>

 
    </div>
  )
}

export default App
