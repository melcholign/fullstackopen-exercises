import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const initialVotes = anecdotes.reduce((votes, anecdote, index) => ({ ...votes, [index]: 0 }), {});

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>
        <strong>
          <em>"{text}"</em>
        </strong>
      </p>
      <p>Has {votes} votes.</p>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);

  const handleSelectNext = () => {
    let nextIndex;
    do {
      nextIndex = generateRandomInt(0, anecdotes.length);
    } while (nextIndex === selected)

    setSelected(nextIndex);
  };

  const handleVote = () => {
    setVotes({ ...votes, [selected]: votes[selected] + 1 })
  };

  const mostVoted = anecdotes.reduce((topIndex, anecdote, currentIndex) => (votes[topIndex] < votes[currentIndex] ? currentIndex : topIndex), 0)

  return (
    <div>
      <section>
        <h1>Anecdote of the Day</h1>
        <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleSelectNext}>Next anecdote</button>
      </section>
      <section>
        <h1>Anecdote With the Most Votes</h1>
        <Anecdote text={anecdotes[mostVoted]} votes={votes[mostVoted]} />
      </section>
    </div>
  )
}

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min));
}

export default App