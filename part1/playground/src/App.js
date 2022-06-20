import { useState } from 'react'


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const LabledButton = (props) => {
  return (
    <div>
      <h1>{props.label}</h1>
      <Button onClick={props.onClick} text={props.text}/>
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const incrementLeft = () => {
    setLeft(left + 1)
    addClick('L')
  }
  const [right, setRight] = useState(0)
  const incrementRight = () => {
    setRight(right + 1)
    addClick('R')
  }

  const [allClicks, setAll] = useState([])
  const addClick = (click) => setAll(allClicks.concat(click))

  return (
    <div>
      <History allClicks={allClicks}/>
      <LabledButton onClick={incrementLeft} text="Increment Left" label={right}/>
      <LabledButton onClick={incrementRight} text="Increment Right" label={left}/>
    </div>
  )
}

export default App