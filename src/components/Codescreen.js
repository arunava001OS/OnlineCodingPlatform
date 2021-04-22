import { React, useState } from "react";

function Codescreen({ problem }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [languageid, setLanguageid] = useState(10);
  const [userinput, setUserinput] = useState("");
  return (
    <div id="codescreen">
      <div className="container-fluid">
        <div className="row">
          <div className="left col-md-5">
            <h2>
              {problem.id}. {problem.slug}
            </h2>
            <p>{problem.statement}</p>
            <p>Input : {problem.input_description}</p>
            <p>Output : {problem.output_description}</p>
            <p>Constraints : {problem.constraints}</p>
          </div>
          <div className="right col-md-7">
            <label for="tags" className="mb-2">
              <b className="heading">Language:</b>
            </label>
            <select
              value={languageid}
              onChange={(e) => setLanguageid(e.target.value)}
              id="tags"
              className="form-control form-inline language"
            >
              <option value="2">C++</option>
              <option value="1">C</option>
              <option value="4">Java</option>
              <option value="10">Python</option>
            </select>
            <div>
            <label for="tags" className="mb-2">
              <b className="heading">Code Here:</b>
            </label>
            <textarea id="codearea"></textarea>
            </div>
            <button type="button" class="btn btn-outline-info">Run</button><br />
            <label for="tags" className="mb-2">
              <b className="heading">Output:</b>
            </label>
            <textarea id="outputarea" readOnly></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codescreen;
