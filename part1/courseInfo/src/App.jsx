function Header(prop) {
  return (
    <h1>{prop.course}</h1>
  );
}

function Part(prop) {
  return (
    <p>{prop.part} {prop.exercises}</p>
  );
}

function Content(prop) {
  return (
    <div>
      <Part part={prop.part1} exercises={prop.exercises1} />
      <Part part={prop.part2} exercises={prop.exercises2} />
      <Part part={prop.part3} exercises={prop.exercises3} />
    </div>
  );
}

function Total(prop) {
  return (
    <p>
      Number of exercises {
        prop.exerciseList.reduce((sum, exercise) => sum += exercise, 0)
      }
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content {...{ part1, exercises1, part2, exercises2, part3, exercises3 }} />
      <Total exerciseList={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App