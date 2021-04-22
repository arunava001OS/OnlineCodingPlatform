import './App.css';
import { useState } from 'react';

import data from './dummy_data/data'
import ProblemBar from './components/ProblemBar'
import Codescreen from './components/Codescreen'

function App() {
  /*
    LAYOUT :
    {Questions List}
    {Coding playground}
  */
  const [problem,setProblem] = useState(data.problems[0])

  const handleClick = (value) => {
    setProblem(value)

  }
  console.log(data.problems)
  return (
    <div className="App">
      <h1>Welcome to online code editor</h1>
      <div className="container problems">
        <div className="row">
          {data.problems.map((prob) => {
            return <ProblemBar key={prob.id} problem = {prob} setProblem={handleClick}/>
          })}
        </div>
      </div>
      <div className="container-fluid">
        <Codescreen problem={problem} />
      </div>

    </div>
  );
}

export default App;
