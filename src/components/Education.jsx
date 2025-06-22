import styles from "./Education.module.css";

const education = [
  {
    year: "2021-2025",
    institution: "Netaji Subhas University Of Technology",
    class: "Computer Science with Internet of Things",
    percent: "7.7 cgpa",
  },
  {
    year: "2019-2020",
    institution: "Vardhman International School",
    class: "XII ,Science Maths",
    percent: "87%",
  },
  {
    year: "2017-2018",
    institution: "Vardhman International School",
    class: "X",
    percent: "88%",
  },
  {
    year: "2023",
    institution: "Frontend Development",
    class: "Javascript",
    percent: "Online",
  },
  {
    year: "2024",
    institution: "Frontend Development",
    class: "React",
    percent: "online",
  },
  {
    year: "2024",
    institution: "Backend Development",
    class: "NodeJs",
    percent: "online",
  },
  {
    year: "2024",
    institution: "Backend Development",
    class: "Socket io",
    percent: "online",
  },
];
const Education = () => {
  return (
    <section className={`${styles.section_front}`}>
      {education.map((data, i) => (
        <div key={i} className={`${styles.education}`}>
          <p className={`${styles.year}`}>{data.year}</p>
          <p className={`${styles.institue}`}>{data.institution}</p>
          <p className={`${styles.course}`}>{data.class}</p>
          <p className={`${styles.grade}`}>{data.percent}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
