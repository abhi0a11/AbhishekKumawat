import React, { useState } from "react";
import styles from "./BucketResume.module.css";
import resumePdf from "../assets/resume__abhi.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

const BucketResume = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.01}
      style={{ flexBasis: "inherit" }}
    >
      <div className={`text-white animateLeft ${styles.bucket_container} `}>
        <div>
          <h1 className="">Resume</h1>
          <div className={`${styles.branding_info} text-white`}>
            <p>
              I have a strong foundation in{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                frontend and backend
              </span>{" "}
              technologies , with expertise in React.js, Node.js, and scalable
              web application development, demonstrated through my{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                {" "}
                internships at Roxwell Technologies.{" "}
              </span>
            </p>
          </div>
        </div>
        <div className={`${styles.branding_social} `}>
          <a
            download="resume"
            href={resumePdf}
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Download CV
          </a>
          <div className={`${styles.mobile}`}>
            <div
              className={`btn-animated btn-skin-outline ${styles.icon_div} animateUp`}
            >
              <a
                href="https://www.linkedin.com/in/abhishekkumawt/"
                target="_blank"
                className={`text-white ${styles.branding_btn} `}
              >
                <FaLinkedinIn className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
            <div
              className={`btn-animated btn-skin-outline ${styles.icon_div} animateUp`}
            >
              <a
                href="https://github.com/abhi0a11"
                target="_blank"
                className={`${styles.branding_btn} `}
              >
                <FiGithub className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default BucketResume;
