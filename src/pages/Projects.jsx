import { FaGithub } from "react-icons/fa6";
import P1Image from '../assets/Project1.png';
import P2Image from '../assets/Project2.png';
import P3Image from '../assets/Project_3.jpg';
import P4Image from '../assets/p4image.jpg';
import P5Image from '../assets/Project5.png';

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Femcare - Healthcare Site',
    description: "Femcare is a comprehensive healthcare application built using the MERN stack (MongoDB, Express, React, Node.js) to promote women's health awareness. Its primary goal is to provide valuable resources, facilitate early symptom detection, and foster a supportive community. The application offers access to a wide range of health articles and enables users to engage with others through forums and support groups, enhancing the overall user experience and support system.",
    repositoryLink: 'https://github.com/duaa2001/MERN_Healthcare_App',
    deploymentLink: 'https://mern-healthcare-app.vercel.app/',
    image: P1Image,
  },

  {
    title: 'Weather Application',
    description: 'This weather application, built using React, provides real-time weather updates using an API. Users can search for current weather conditions in any city, with data dynamically displayed in an interactive user interface.',
    repositoryLink: 'https://github.com/duaa2001/React_Weather_App',
    deploymentLink: 'https://duaa-weather-application.netlify.app/',
    image: P2Image,
  },

  {
    title: 'Customer Support AI',
    description: 'This project is a customer support chatbot built with Next.js, React, and OpenAI\'s gpt-3.5-turbo model. It features a Material-UI interface for users to interact with the AI, providing real-time, responsive support in a styled chat window.',
    repositoryLink: 'https://github.com/duaa2001/AI-Customer-Support-',
    deploymentLink: 'https://ai-customer-support-eight.vercel.app/',
    image: P4Image,
  },
  
  {
    title: 'Python Health Tracker Tool',
    description: 'This Python Health Tracker Tool helps users log their dietary habits and exercise routines. Built using Python with Pandas and NumPy, it provides efficient calorie calculations and error handling for a seamless user experience.',
    repositoryLink: 'https://github.com/duaa2001/Python_MyProjects/tree/main/Python_Diet_Log',
    image: P3Image,
  },

  {
    title: 'Easy Shopping',
    description: 'This HTML/CSS web application provides users with ethical and affordable alternatives to popular fashion brands',
    repositoryLink: 'https://github.com/duaa2001/Easy_Shopping/tree/main/Project-Shopping',
    image: P5Image,
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
        </section>
      ))}
    </main>
  )
}

export default Projects