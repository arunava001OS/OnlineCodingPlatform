import React from "react";

function ProblemBar({ problem, setProblem }) {
  return (
    <div className="col-md-4 col-sm-1 problembar">
      <div
        className="alert alert-primary"
        role="alert"
        onClick={() => {
          setProblem(problem);
          window.location.replace("/#codescreen");
          window.history.pushState("", "", '/');
        }}
      >
        {problem.id}. {problem.slug}
      </div>
    </div>
  );
}

export default ProblemBar;
