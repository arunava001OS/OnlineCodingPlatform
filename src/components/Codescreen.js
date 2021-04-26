import { React, useState } from "react";
import instance from "../config";

function Codescreen({ problem }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [languageid, setLanguageid] = useState(71);
  const [userinput, setUserinput] = useState("");

  const handleSubmit = async (e) => {
    console.log("creating ");
    e.preventDefault();
    let outputtext = document.getElementById("outputarea");
    outputtext.innerHTML = "";
    for (let i = 0; i < problem.inputs.length; i++) {
      outputtext.innerHTML += `Creating Submission${i + 1}......\n`;

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
        outputtext.innerHTML = `Creating Submission ${i + 1}... \nSubmission ${
          i + 1
        } Created ...\nChecking Submission ${i + 1} Status\nstatus : ${
          jsonGetSolution.status.description
        }\n`;
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
					const input = jsonGetSolution.stdin
          outputtext.innerHTML += `Results${
            i + 1
          }\nInput:\n${input}\nOutput:\n${output}\nExecution Time : ${
            jsonGetSolution.time
          } Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
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
  };

  return (
    <div id="codescreen">
      <div className="container-fluid">
        <div className="row">
          <div className="left col-md-5">
            <h2>
              {problem.id}. {problem.slug}
            </h2>
            <p>
              {input}
              {languageid}
            </p>
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
              <option value="71">Python</option>
            </select>
            <div>
              <label for="tags" className="mb-2">
                <b className="heading">Code Here:</b>
              </label>
              <textarea
                id="codearea"
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <button
              type="button"
              class="btn btn-outline-info"
              onClick={handleSubmit}
            >
              Run
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
