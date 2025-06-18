import "./about.css";
import ME from "../../assets/codingImage.jpeg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>

              <h5>Coding</h5>
              <small>8+ years</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Leadership</h5>
              <small>Led 5+ Projects</small>
            </article>
          </div>

          <p>
            I am Anurag Krishna, a Full-Stack Web Developer from Bihar, India.<br/><br/>
            I'm all about diving into new tech, learning on the go, and crafting solutions that actually work. With a strong math background, I turn challenges into creative solutions.<br/><br/> Ready to take on challenges and build something awesome? Let's make it happen! 🚀
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
