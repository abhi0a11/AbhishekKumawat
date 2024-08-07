import styles from "./Resume.module.css";
import React from "react";
import { useState } from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Experience from "./Experience";
import Education from "./Education";
const Resume = () => {
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(false);
  const [experiance, setExperiance] = useState(false);
  const [education, setEducation] = useState(false);
  const [head, setHead] = useState("Frontend Skills");

  const handleEductation = () => {
    setHead("Education");
    setFrontend(false);
    setBackend(false);
    setExperiance(false);
    setEducation(true);
  };
  const handleFrontend = () => {
    setHead("Frontend Skills");
    setFrontend(true);
    setBackend(false);
    setExperiance(false);
    setEducation(false);
  };
  const handleBackend = () => {
    setHead("Backend Skills");
    setFrontend(false);
    setBackend(true);
    setExperiance(false);
    setEducation(false);
  };
  const handleExperience = () => {
    setHead("Experience");
    setFrontend(false);
    setBackend(false);
    setExperiance(true);
    setEducation(false);
  };
  return (
    <section id="Skills" className={`bg-color ${styles.skills_container}`}>
      <div className={`${styles.tabs_section}`}>
        <div className={`${styles.heading}`}>Why hire me?</div>

        <button
          type="button"
          className={`${styles.navigation_btn} ${education && "active"}`}
          onClick={handleEductation}
        >
          Education
        </button>
        <button
          type="button"
          className={`${styles.navigation_btn} ${frontend && "active"}`}
          onClick={handleFrontend}
        >
          Frontend Skills
        </button>
        <button
          type="button"
          className={`${styles.navigation_btn} ${backend && "active"}`}
          onClick={handleBackend}
        >
          Backend Skills
        </button>
        <button
          type="button"
          className={`${styles.navigation_btn} ${experiance && "active"}`}
          onClick={handleExperience}
        >
          Experience
        </button>
      </div>
      <div className={`${styles.info_container}`}>
        <div className={`${styles.heading}`}>{head}</div>
        <div className={`${styles.info}`}>
          {frontend && <FrontendSkills />}
          {backend && <BackendSkills />}
          {experiance && <Experience />}
          {education && <Education />}
        </div>
      </div>
    </section>
  );
};

export default Resume;
