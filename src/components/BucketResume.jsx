import React, { useState } from "react";
import styles from "./BucketResume.module.css";
import resumePdf from "../assets/Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import BucketContact from "./BucketContact";

const BucketResume = () => {
  return (
    <div className={`text-white animateLeft ${styles.bucket_container} `}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.01}
        style={{ flexBasis: "45%", maxWidth: "700px" }}
      >
        <div>
          <h1 style={{ fontSize: "clamp(25px, 5vw, 40px)" }}>Resume</h1>
          <div className={`${styles.branding_info} text-white`}>
            <p>
              I have a strong foundation in{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                frontend and backend
              </span>{" "}
              technologies, with hands-on experience in building scalable web
              applications using{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                React.js, NestJS, GraphQL, TypeORM, and MySQL
              </span>
              , gained while working on real-world fintech products at{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                Ambak(TENB Fintech Private Ltd.).
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
            Resume
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
      </Tilt>
      {/* <div className={`animateInRight ${styles.inside}`}> */}
      <BucketContact></BucketContact>
      {/* <BucketAbout></BucketAbout> */}
      {/* </div> */}
    </div>
  );
};

export default BucketResume;
