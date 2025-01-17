import { FaGithub } from "react-icons/fa6";
import P1Image from '../assets/Project1.png';
import P2Image from '../assets/Project2.png';
import P3Image from '../assets/Project_3.jpg';
import P4Image from '../assets/techmarketproject.png';
import P5Image from '../assets/movieboxproject.png';

const myProjects = [
  {
    title: 'Femcare - Healthcare Site',
    description: "Femcare is a comprehensive healthcare application built using the MERN stack (MongoDB, Express, React, Node.js) to promote women's health awareness. Its primary goal is to provide valuable resources, facilitate early symptom detection, and foster a supportive community. The application offers access to a wide range of health articles and enables users to engage with others through forums and support groups, enhancing the overall user experience and support system.",
    repositoryLink: 'https://github.com/duaa2001/MERN_Healthcare_App',
    deploymentLink: 'https://mern-healthcare-app.vercel.app/',
    image: P1Image,
  },

  {
    title: 'Tech Marketplace site',
    description: 'Tech Marketplace is a LinkedIn-style platform for tech professionals to showcase projects and connect based on skills and interests. Users can create profiles, display projects, and leverage AI to generate profile summaries.',
    repositoryLink: 'https://github.com/duaa2001/RecruitingSite',
    deploymentLink: 'https://techmarketplace-dts-projects-8b296abb.vercel.app/',
    youtubeLink: 'https://www.youtube.com/watch?v=PvLYTA9aVuU',
    image: P4Image,
  },

  {
    title: 'Weather Application',
    description: 'This weather application, built using React, provides real-time weather updates using an API. Users can search for current weather conditions in any city, with data dynamically displayed in an interactive user interface.',
    repositoryLink: 'https://github.com/duaa2001/React_Weather_App',
    deploymentLink: 'https://duaa-weather-application.netlify.app/',
    image: P2Image,
  },

  {
    title: 'Movie Box: Customer Support Agent',
    description: 'This project is a movie recommendation chatbot built with Next.js, React, and OpenAI\'s gpt-3.5-turbo model. It features a Material-UI interface for users to engage with the AI, offering real-time, personalized movie recommendations in a sleek and responsive chat window.',
    repositoryLink: 'https://github.com/duaa2001/rate_projects',
    deploymentLink: 'https://moviebox-ten-mu.vercel.app/',
    image: P5Image,
  },

  {
    title: 'Python Health Tracker Tool',
    description: 'This Python Health Tracker Tool helps users log their dietary habits and exercise routines. Built using Python with Pandas and NumPy, it provides efficient calorie calculations and error handling for a seamless user experience.',
    repositoryLink: 'https://github.com/duaa2001/Python_MyProjects/tree/main/Python_Diet_Log',
    image: P3Image,
  },

  {
    title: 'See More',
    description: '',
    repositoryLink: 'https://github.com/duaa2001?tab=repositories',
    isIcon: true,
  },

];
const Projects = () => {
  return (
    <main className="projects-container">
      {/* <h1>Selective Projects</h1> */}
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            {project.isIcon ? (
              <div className="icon-container">
              <FaGithub className="icon" />
            </div>
            ) : (
              <img src={project.image} alt={project.title} className="project-image" />
            )}
          </section>
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="text-lg text-white">{project.description}</p>
          <p className = "click-here text-gray-300 italic"> Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a></p>
          {project.deploymentLink && (
            <p className="deploy text-lime-300 italic">
              View the live deployment <a href={project.deploymentLink} target="_blank">Here</a>
            </p>
          )}
          {project.youtubeLink && (
            <p className="youtube-link text-yellow-300 italic">
              Watch the project demo on YouTube <a href={project.youtubeLink} target="_blank">Here</a>
            </p>
          )}
        </section>
      ))}
    </main>
  )
}

export default Projects