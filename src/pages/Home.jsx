import { NavLink } from "react-router-dom";
import coverImg from '../assets/landingpic.jpg'
import { FaGithub, FaLinkedin  } from "react-icons/fa6";

const fullName = 'Duaa Tariq';
const personalQuote = 'Always learning, always thriving';
const professionalSummary = 'Recent Computer Science graduate with a solid background in software development, research, and problem-solving. Proficient in Python and the MERN stack, with hands-on experience from internships and academic projects. Experienced in leading projects and committed to continuous learning, eager to contribute to a dynamic team and drive impactful business decisions.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
      <div className="hero-content-wrapper">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <div><NavLink to="/contact">
        Contact Me
        </NavLink>
        </div>
        <div className="connect-container">
          <p>
            Connect with me on Linkedin 
            <a href="https://www.linkedin.com/in/duaa-t" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" size={30} />
            </a>
          </p>
          <p>
            View my Github Profile
            <a href="https://github.com/duaa2001?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub className="git-icon" size={30} />
            </a>
          </p>
        </div>
        </div>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={coverImg} alt="home page" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">I am a...</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects...</h2>
        <p className="subsection-paragraph">The projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home