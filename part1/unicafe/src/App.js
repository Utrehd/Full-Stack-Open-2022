import { useState } from 'react'

const H1Text = ({text}) => <h1>{text}</h1>
const LabeldValue = ({text, value}) => <p>{text} : {value}</p>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  return (
    <div>
      <LabeldValue text={'Total'} value={total}/>
      <LabeldValue text={'Average'} value={(good-bad)/total}/>
      <LabeldValue text={'Positive Rate %'} value={100/total*good}/>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementValue = (parameter, update) => update(parameter + 1)
 //<Button handleClick={incrementValue(good, setGood)} text={'Vote for Good'}/>
  return (
    <div>
      <H1Text text={'Give Feedback'}/>
      <Button handleClick={() => incrementValue(good, setGood)} text={'Vote for Good'}/>
      <Button handleClick={() => incrementValue(neutral, setNeutral)} text={'Vote for Neutral'}/>
      <Button handleClick={() => incrementValue(bad, setBad)} text={'Vote for Bad'}/>
      <H1Text text={'Statistics'}/>
      <LabeldValue text={'Good'} value={good}/>
      <LabeldValue text={'Neutral'} value={neutral}/>
      <LabeldValue text={'Bad'} value={bad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App