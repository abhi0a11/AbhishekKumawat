import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiNestjs, SiSocketdotio, SiWebrtc } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import styles from "./Backend.module.css";
const skills = [
  {
    logo: <FaNodeJs className={`${styles.logo}`} />,
    lang: "NodeJS",
  },
  {
    logo: <SiExpress className={`${styles.logo}`} />,
    lang: "Express JS",
  },
  {
    logo: <SiMongodb className={`${styles.logo}`} />,
    lang: "Mongo DB",
  },
  {
    logo: <SiSocketdotio className={`${styles.logo}`} />,
    lang: "Socket io",
  },
  {
    logo: <TbBrandMysql className={`${styles.logo}`} />,
    lang: "SQL",
  },
  {
    logo: <SiWebrtc className={`${styles.logo}`} />,
    lang: "Web RTC(PeerJS)",
  },
  {
    logo: <SiNestjs className={`${styles.logo}`} />,
    lang: "NEST JS",
  },
  {
    logo: <GrGraphQl className={`${styles.logo}`} />,
    lang: "GraphQl",
  },{
    logo: <DiMysql className={`${styles.logo}`} />,
    lang: "MySQL",
  },
  {
    logo: <FaPhp className={`${styles.logo}`} />,
    lang: "PHP Laravel",
  },
];
const BackendSkills = () => {
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

export default BackendSkills;
