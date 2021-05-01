import { React, useState, useEffect } from "react";
import instance from "../config";

function Codescreen({ problem, setCodescreen }) {
  const [input, setInput] = useState("");
  const [languageid, setLanguageid] = useState(71);

  useEffect(() => {
    let item = localStorage.getItem(`${problem.id}`);
    if (item) {
      let codearea = document.getElementById("codearea");
      codearea.value = item;
      setInput(item);
    }
  }, []);
  const handleSubmit = async (e) => {
    console.log("creating ");
    e.preventDefault();
    let outputtext = document.getElementById("outputarea");
    let answers = [];
    if (input.length == 0) {
      outputtext.innerHTML +=`OnlineCodingPlatform:~ Please write some code first :P\n`;
    } else {
      for (let i = 0; i < problem.inputs.length; i++) {
        outputtext.innerHTML += `OnlineCodingPlatform:~ user$ Creating Submission${
          i + 1
        }......\n`;

        const response = await instance.post("/submissions", {
          source_code: input,
          stdin: problem.inputs[i],
          language_id: languageid,
        });
        outputtext.innerHTML += `Submission${i + 1} Created ...\n`;
        const jsonResponse = response;
        console.log(response.data);

        let jsonGetSolution = {
          status: { description: "Queue" },
          stderr: null,
          compile_output: null,
        };
        while (
          jsonGetSolution.status.description !== "Accepted" &&
          jsonGetSolution.stderr == null &&
          jsonGetSolution.compile_output == null
        ) {
          console.log("while loop");
          outputtext.innerHTML += `Checking Submission ${
            i + 1
          } Status\nstatus : ${jsonGetSolution.status.description}\n`;
          if (jsonResponse.data.token) {
            console.log("token present");
            let getSolution = await instance.get(
              `/submissions/${jsonResponse.data.token}?base64_encoded=True&fields=*`
            );
            jsonGetSolution = getSolution.data;
            console.log(jsonGetSolution);
          }
          if (jsonGetSolution.stdout) {
            const output = jsonGetSolution.stdout;
            const input = jsonGetSolution.stdin;
            answers.push(output);
            outputtext.innerHTML += `Input:\n${input}\nOutput:\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes\n`;
          } else if (jsonGetSolution.stderr) {
            const error = jsonGetSolution.stderr;

            outputtext.innerHTML += `\n Error for prob ${i + 1} :${error}`;
          } else {
            const compilation_error = atob(jsonGetSolution.compile_output);

            outputtext.innerHTML += `\n Error for prob ${
              i + 1
            }:${compilation_error}`;
          }
        }
      }
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let savedItem = localStorage.getItem(`${problem.id}`);
    if (savedItem) {
      localStorage.removeItem(`${problem.id}`);
    }
    localStorage.setItem(`${problem.id}`, input);
  };
  const handleReset = (e) => {
    e.preventDefault();
    let savedItem = localStorage.getItem(`${problem.id}`);
    if (savedItem) {
      localStorage.removeItem(`${problem.id}`);
    }
    let codearea = document.getElementById("codearea");
    codearea.value = "";
    setInput("");
  };

  const handleClearTerminal = () => {
    let outputtext = document.getElementById("outputarea");
    outputtext.innerHTML = 'OnlineCodingPlatform:~ user$ \n'
  }

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
            <button
              type="button"
              class="probtop btn btn-outline-info"
              onClick={(e) => {
                setCodescreen(false);
              }}
            >
              <i class="fas fa-arrow-up"></i>More Problems
            </button>
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
              <option value="52">C++</option>
              <option value="49">C</option>
              <option value="71">Python</option>
            </select>
            <div>
              <label for="tags" className="mb-2">
                <b className="heading">Code Here:</b>
              </label>
              <textarea
                id="codearea"
                spellCheck="false"
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              class="btn btn-outline-info"
              onClick={handleSubmit}
            >
              <i class="fas fa-play"></i>  Run
            </button>
            <button
              type="button"
              class="btn btn-outline-success mx-1"
              onClick={handleSave}
            >
              <i class="far fa-save"></i>  Save
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={handleReset}
            >
              <i class="fas fa-trash"></i>  Reset
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary mx-1"
              onClick={handleClearTerminal}
            >
              <i class="fas fa-terminal"></i>  Clear Terminal
            </button>
            
            <br />
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
