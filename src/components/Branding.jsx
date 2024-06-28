import styles from "./Branding.module.css";
import resumePdf from "../assets/resume__abhi.pdf";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Branding = () => {
  const typedName = useRef("");
  const typedSkill = useRef("");

  useEffect(() => {
    const typed = new Typed(typedName.current, {
      strings: ["Abhishek Kumawat."],
      typeSpeed: 100,
      backSpeed: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(typedSkill.current, {
      strings: ["UI/UX Designer", "Web Design Expert."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      className={`py-5 vh-100 ${styles.brandingContainer} ${styles.rowEl} row py-lg-5 `}
      id="brand"
    >
      <div className={`text-light ${styles.iconContainer}`}>
        <p>
          <a
            href="https://www.linkedin.com/in/abhishekkumawt/"
            target="_blank"
            className={`text-white ${styles.about_btn}`}
          >
            <FaLinkedinIn className={`${styles.fa__icon__detail}`} />
          </a>
        </p>
        <p>
          <a
            href="https://github.com/abhi0a11"
            target="_blank"
            className={`${styles.about_btn} `}
          >
            <FiGithub className={`${styles.fa__icon__detail}`} />
          </a>
        </p>
        {/* <p>
          <a href="">
            <SiNetlify style={{ width: "44px", height: "44px" }} />
          </a>
        </p> */}
      </div>
      <div className={`${styles.displayBranding}`}>
        <div className="container conatainer--hero text-light ">
          <div className="text-start hero-header container-fluid">
            <h2
              className={`text-start display-6 fw-bold text-white lh-1 ${styles.frontEndTextSize}`}
            >
              FRONT-END
            </h2>
            <h1
              className={`text-start display-3 fw-bold text-white lh-1 ${styles.developerTextSize}`}
            >
              DEVELOPER
            </h1>
            {/* <h2> */}
            <div className="animate">
              <span
                className={`${styles.typed_Name} hero-eyebrow`}
                ref={typedName}
              ></span>
              {/* </h2> */}
              <br />
              {/* <h1> */}
              <span
                className={`${styles.typed_Skill} hero-heading`}
                ref={typedSkill}
              ></span>
            </div>
            {/* </h1> */}
          </div>
          <p>
            <a
              download="resume"
              href={resumePdf}
              className={`btn-animated btn btn-blue btn-info btn-lg px-4  ${styles.resumeBtn}`}
            >
              My Resume
            </a>
          </p>
        </div>
      </div>
      <div className={`col-lg-6 col-md-8 ${styles.imgMine}`}>
        <img
          src="https://ik.imagekit.io/abhishekkumawat/abhishek_1.jpg?updatedAt=1719573870814"
          className={`cmx-lg-auto img-fluid ${styles.imgMine1}`}
          alt="Abhishek"
          loading="lazy"
        />
        <div className={`text-light ${styles.iconImgContainer}`}>
          <p className="m-0">
            <a
              href="https://www.instagram.com/abhishekkumawt._/"
              target="_blank"
              className={`text-white ${styles.about_btn}`}
            >
              <FaInstagram className={`${styles.btn_social}`} />
            </a>
          </p>
          <p className="m-0">
            <a
              href="https://x.com/AbhishekKu32163"
              target="_blank"
              className={`${styles.about_btn} `}
            >
              <FaTwitter className={`${styles.btn_social}`} />
            </a>
          </p>
          <p className="m-0">
            <a
              href="https://www.facebook.com/abhisjek.kumawat?mibextid=LQQJ4d"
              target="_blank"
              className={`${styles.about_btn} `}
            >
              <IoLogoFacebook className={`${styles.btn_social}`} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Branding;

// {mx-lg-auto img-fluid
// }

{
  /* <p className={`lead text-white ${styles.brandPara}`}>
    A multidiscipilinary self-taught designer expert in creating
    user centered websites.
  </p> */
}
{
  /* <p className={`lead text-white ${styles.brandPara}`}>
  A multidiscipilinary self-taught designer expert in creating user
  centered websites. I can rely on my perfectionism when it comes to
  designing. I have a strong attention to detail, I like to update
  my knowledge everytime learning new tools and trends and provide
  innovative solutions.
</p> */
}

{
  /* <button
  type="button"
  className="btn btn-outline-info btn-lg px-4 mt-5 mx-3"
  >
  Hire me
  </button> */
}
