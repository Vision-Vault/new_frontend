import  { useState } from "react";
import ProjectForm from "./createProject";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome styles

export default function Homeinfo() {
  const [showNewDiv, setShowNewDiv] = useState(false);

  const toggleNewDiv = () => {
    setShowNewDiv(!showNewDiv);
  };

  return (
    <div className="homeinfo">
      <img id="homegif" src="/images/g2.gif" alt="GIF" />

      <div id="syllabus">
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Project Success Roadmap
        </h1>

        <img id="plan" src="/images/plan.png" alt="GIF" />

        <div id="step1">
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Plan Your Project
          </h2>
          <p>
            Define Objectives and Scope <br />
            Create a Project Plan <br />
            Identify Stakeholders
          </p>
        </div>
        <img id="arrow1" src="/images/arrow22.png" alt="GIF" />
        <img id="excuit" src="/images/excuit.png" alt="GIF" />

        <div id="step2">
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Execute Your Plan
          </h2>
          <p>
            Implement and Monitor
            <br /> Communicate and Manage Risks
          </p>
        </div>

        <img id="arrow2" src="/images/arrow11.png" alt="GIF" />

        <img id="close" src="/images/close.png" alt="close" />

        <div id="step3">
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Review and Close
          </h2>
          <p>
            Track Progress and Resolve Issues
            <br /> Document and Engage Stakeholders <br />
            Close and Evaluate
          </p>
        </div>
        <br />
        <img id="arrow22" src="/images/arrow11.png" alt="GIF" />
      </div>

      <button id="ncreate" onClick={toggleNewDiv}>
        Create Project <br />
        <i
          className="fa fa-angle-double-right"
          style={{ transform: "rotate(90deg)", fontSize: 30 }}
        ></i>
      </button>

      {showNewDiv && (
        <div className="newDiv">
          <img src="/images/map.png" alt="mm" />
          <ProjectForm />
          <button id="cancel" onClick={toggleNewDiv}>
            <i
              className="fa fa-angle-double-right"
              style={{
                transform: "rotate(-90deg)",
                color: "white",
                fontSize: 30,
              }}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
}
