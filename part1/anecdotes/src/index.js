import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({handleClick , text}) => <button onClick = {handleClick}>{text}</button>

const App = ({anecdotes}) => {
  const [selected , setSelected] = useState(0);
  const [votes , setVotes] = useState(new Array(6).fill(0));

  const chooseRandomQuote = () => {
    const index = Math.floor(Math.random()*6);
    setSelected(index);
  }

  const voteQuote = () => {
    const copyVotes = [...votes];
    copyVotes[selected]+=1;
    setVotes(copyVotes);
  }

  const indexOfMaximumVotes = votes.indexOf(Math.max(...votes));
  
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <Button handleClick = {voteQuote} text="vote"/>
        <Button handleClick = {chooseRandomQuote} text="next anecdote"/>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[indexOfMaximumVotes]}</p>
        <p>has {votes[indexOfMaximumVotes]}</p>
      </div>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes = {anecdotes}/> , document.getElementById('root'));