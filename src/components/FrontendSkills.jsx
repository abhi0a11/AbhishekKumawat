// import styles from "./TeckStack.module.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import styles from "./Frontend.module.css";
const skills = [
  {
    logo: <IoLogoHtml5 className={`${styles.logo}`} />,
    lang: "HTML",
    percent: "90%",
    style: "html",
  },
  {
    logo: <IoLogoCss3 className={`${styles.logo}`} />,
    lang: "CSS",
    percent: "90%",
    style: "css",
  },
  {
    logo: <RiJavascriptFill className={`${styles.logo}`} />,
    lang: "JAVASCRIPT",
    percent: "85%",
    style: "js",
  },
  {
    logo: <SiTypescript className={`${styles.logo}`} />,
    lang: "TYPESCRIPT",
    percent: "85%",
    style: "js",
  },
  {
    logo: <FaReact className={`${styles.logo}`} />,
    lang: "REACT.JS",
    percent: "85%",
    style: "react",
  },
  {
    logo: <FaGitAlt className={`${styles.logo}`} />,
    lang: "GIT Version Control",
    percent: "85%",
    style: "git",
  },
];
const FrontendSkills = () => {
  return (
    <section className={`${styles.section_front}`}>
      {skills.map((data, i) => (
        <div key={i} className={`${styles.technical__bars}`}>
          <span>{data.logo}</span>
          <span>{data.lang}</span>
        </div>
      ))}
    </section>
  );
};

export default FrontendSkills;
