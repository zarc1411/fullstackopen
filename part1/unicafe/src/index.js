import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => <h1>give feedback</h1>

const Button = ({handleClick , text}) => {
  return(
    <button onClick = {handleClick}>{text}</button>
  );
}

const Statistic = ({text , value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good , neutral , bad}) => {
  const all = good + neutral + bad;
  if(all===0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <Statistic text = "good" value = {good} />
        <Statistic text = "neutral" value = {neutral}/>
        <Statistic text = "bad" value = {bad}/>
        <Statistic text = "all" value = {all}/>
        <Statistic text = "average" value = {Math.abs(good-bad)/all}/>
        <Statistic text = "percentage" value = {(good/all)*100}/>
        </tbody>
      </table>
    </div>
  );
}

const App = () => {
  const [good , setGood] = useState(0);
  const [neutral , setNeutral] = useState(0);
  const [bad , setBad] = useState(0);
  return(
    <div>
      <div>
        <Header/>
        <Button handleClick = {()=>setGood(good+1)} text="good"/>
        <Button handleClick = {()=>setNeutral(neutral+1)} text="neutral"/>
        <Button handleClick = {()=>setBad(bad+1)} text="bad"/>
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
    </div>
  );
}

ReactDOM.render(<App/> , document.getElementById("root"));