const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({part}) => {
  console.log(part.part)
  return (
    <div>
      <p>{part.part} {part.exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  
  console.log(parts[0])
  return(
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Number of exercies {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const name = "Half Stack application development"
  const parts =[
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }]
  console.log(parts[0].part)
  console.log(parts[0].exercises)
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App