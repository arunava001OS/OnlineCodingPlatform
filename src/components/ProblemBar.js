import React from 'react'

function ProblemBar({problem,setProblem}) {
    return (
        <div className="alert alert-primary col-md-4 col-sm-1" role="alert" onClick={() => {setProblem(problem);window.location.replace('/#codescreen')}}>
             {problem.id}. {problem.slug}
        </div>
    )
}

export default ProblemBar
