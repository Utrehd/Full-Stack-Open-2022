import { useState } from 'react'
import React from 'react';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const H2Text = ({text}) => <h2>{text}</h2>
const H4Text = ({text}) => <h4>{text}</h4>
const MostVoted = ({votes, anecdotes}) => {
  // console.log('votes: ', votes)
  // console.log('votes: ', Object.values(votes))
  const arrVotes = Object.values(votes)
  let max = Math.max(...arrVotes)
  // console.log('max: ', max)
  let index = arrVotes.indexOf(max)
  // console.log('index: ', index)
  if (max <= 0){
    return(
      <H4Text text={'No votes given.'}/>
    )
  }

  return(
    <div>
      <H4Text text={anecdotes[index]}/>
      <H4Text text={'has ' + arrVotes[index] + ' votes'}/>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  const random = () => Math.floor(Math.random() * anecdotes.length)
  const randomAnecdote = () => setSelected(random)

  const voteAnecdote = () => {
    const newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  console.log('random number: ', selected)
  return (
    <React.StrictMode>
      <div>
        <H2Text text={'Anecdote of the day'}/>
        <H4Text text={anecdotes[selected]}/>
        <H4Text text={'has ' + votes[selected] + ' votes'}/>
        <Button text={'vote for anecdote'} handleClick={voteAnecdote}/>
        <Button text={'next anecdote'} handleClick={() => randomAnecdote()}/>
        <H2Text text={'Anecdote with most votes'}/>
        <MostVoted votes={votes} anecdotes={anecdotes}/>
      </div>
    </React.StrictMode>
  )
}

export default App