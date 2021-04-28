import "./App.css";
import { useState } from "react";

import data from "./dummy_data/data";
import ProblemBar from "./components/ProblemBar";
import Codescreen from "./components/Codescreen";

function App() {
  /*
    LAYOUT :
    {Questions List}
    {Coding playground}
  */
  const [problem, setProblem] = useState(data.problems[0]);
  const [codescreen,setCodescreen] = useState(false)

  const handleClick = (value) => {
    setProblem(value);
  };
  const handleCodescreen = () => {
    setCodescreen(true);
  }
  console.log(data.problems);
  if(!codescreen){
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="logo">
            <i className="fab fa-free-code-camp"></i>  OnlineCodingPlatform
            </span>
          </a>
        </div>
      </nav>
      <div className="container problems">
        <div className="row">
          {data.problems.map((prob) => {
            return (
              <ProblemBar
                key={prob.id}
                problem={prob}
                setProblem={handleClick}
                setCodescreen={handleCodescreen}
              />
            );
          })}
        </div>
        <h6 id="announcement">More problems coming soon !!!!</h6>
      </div>
    </div>
    )
  }else{
    return (
      <div className="App">
        <div className="container-fluid">
          <Codescreen problem={problem} setCodescreen={setCodescreen}/>
        </div>
      </div>
    );
  }
  
}

export default App;
