/**
 * when start game btn is clicked:
 * 1. Time remaining start to countdown
 * 2. when time remaining is 0, word count displayed the how many words 
 * 
 */
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(40)
  const [startGame, setStartGame] = useState(false)
  const [countWords, setCountWords] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e){
    setText(e.target.value)
  }
  function gameStart(){
    setStartGame(true)
    setTimeRemaining(5)
    setCountWords(0)
    setText('')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  // 1. need to trim the empty space after the last word
  // 2. only count the word that is not empty space using filter
  function wordCount(text){
    const wordArr = text.trim().split(' ')
    const total = wordArr.filter(word => word != '').length
    return total
  }
  //When time remaining is not 0, countdown the timeRemaining
  // useEffect(()=>{
  //   if (timeRemaining>0){
  //     let interval = setInterval(()=>{
  //       setTimeRemaining(prev => prev-1)
  //       console.log(timeRemaining)
  //     }, 1000);
  //   return ()=>{
  //     clearInterval(interval);
  //   }
  //   }
  // },[timeRemaining])

  useEffect(()=>{
    // console.log('useEffect', timeRemaining)
    if (startGame && timeRemaining>0){
      const timeoutId = setTimeout(()=>{
        setTimeRemaining(prev => {
          // console.log({ prev, timeRemaining })
          return prev-1;
        })
      }, 1000);
      return (() => {
        clearTimeout(timeoutId);
      })
    } else if (timeRemaining===0){
      setStartGame(false)
      setCountWords(wordCount(text))
    }
  },[timeRemaining, startGame])

  return (
    <div>
      <h1>
        Speed Typing Game
      </h1>
      <textarea 
        disabled={!startGame}
        onChange = {handleChange}
        value={text}
        ref = {textBoxRef}
        />
    
      
      <h4>Time remaining:{timeRemaining}</h4>
      <button disabled={startGame} onClick = {gameStart}>Start Game</button>
      <h1>Word Count:{countWords}</h1>

 
    </div>
  )
}

export default App
