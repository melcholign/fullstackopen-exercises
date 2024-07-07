const Header = prop => {
  return (
    <h1>{prop.courseName}</h1>
  );
}

const Part = prop => {
  return (
    <p>{prop.part.name} {prop.part.exercises}</p>
  );
}

const Content = prop => {
  return (
    <div>
      <Part part={prop.parts[0]} />
      <Part part={prop.parts[1]} />
      <Part part={prop.parts[2]} />
    </div>
  );
}

const Total = prop => {
  return (
    <p>
      Number of exercises {
        prop.parts.reduce((sum, part) => sum += part.exercises, 0)
      }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ],
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App