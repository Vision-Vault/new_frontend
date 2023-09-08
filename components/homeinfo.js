import { useState } from "react";
import ProjectForm from "./createProject";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

export default function Homeinfo() {
  const [showNewDiv, setShowNewDiv] = useState(false);

  const toggleNewDiv = () => {
    setShowNewDiv(!showNewDiv);
  };

  return (
    <>
      <div class="feature">
        <div class="col-lg-4">
          <div class="about_content_box_all mt-3">
            <div class="about_detail text-center">
              <div class="about_icon">
                <i class="fas fa-pencil-alt"> <FontAwesomeIcon icon={faShieldHalved} /></i>
              </div>
              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Security</h5>
              <p class="edu_desc mt-3 mb-0 text-muted">At Vision Vault, we take your security seriously. Protecting your data is our top priority. </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="about_content_box_all mt-3">
            <div class="about_detail text-center">
              <div class="about_icon">
                <i class="fab fa-angellist"><FontAwesomeIcon icon={faHandshake} /></i>
              </div>
              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Interactivity</h5>
              <p class="edu_desc mb-0 mt-3 text-muted">At Vision Vault, we focus on enhancing interactivity for engaging user experiences.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="about_content_box_all mt-3">
            <div class="about_detail text-center">
              <div class="about_icon">
                <i class="fas fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></i>
              </div>
              <h5 class="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
              <p class="edu_desc mb-0 mt-3 text-muted">At Vision Vault, your premier crowdfunding platform for innovation and dreams.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="homeinfo">
        <img id="homegif" src="/assests/coins.gif" alt="GIF" />
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

          <img id="plan" src="/assests/list.png" alt="GIF" />

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
          <img id="excuit" src="/assests/option.png" alt="GIF" />

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

          <img id="close" src="assests/check2.png" alt="close" />

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
    </>
  );
}
