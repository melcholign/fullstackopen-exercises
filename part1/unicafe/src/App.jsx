import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = good / total * 100;

  if (total === 0) {
    return (
      <section>
        <h1>Statistics</h1>
        <p>No feedback is given.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={'Good'} value={good} />
          <StatisticLine text={'Neutral'} value={neutral} />
          <StatisticLine text={'Bad'} value={bad} />
          <StatisticLine text={'Total'} value={total} />
          <StatisticLine text={'Average'} value={average} />
          <StatisticLine text={'Positive Percentage'} value={positivePercentage} />
        </tbody>
      </table>
    </section>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementFeedback = (state, setState) => {
    setState(state + 1);
  }


  return (
    <div>
      <section>
        <h1>Give Feedback</h1>
        <Button text={'Good'} onClick={() => handleIncrementFeedback(good, setGood)} />
        <Button text={'Neutral'} onClick={() => handleIncrementFeedback(neutral, setNeutral)} />
        <Button text={'Bad'} onClick={() => handleIncrementFeedback(bad, setBad)} />
      </section>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;