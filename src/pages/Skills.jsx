import React from 'react';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaWindows, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiExpress, SiInsomnia, SiVercel, SiOpenai } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython style={{ color: '#306998' }} /> },
  { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#F0DB4F' }} /> },
  { name: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
  { name: 'SQL', icon: <FaDatabase style={{ color: '#003B57' }} /> },
  { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} /> },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68A063' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000000' }} /> }, // Next.js
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> }, // MongoDB
  { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> }, // Firebase
  { name: 'Express', icon: <SiExpress style={{ color: '#000000' }} /> }, // Express
  { name: 'Insomnia', icon: <SiInsomnia style={{ color: '#4000BF' }} /> }, // Insomnia
  { name: 'Git', icon: <FaGitAlt style={{ color: '#F05032' }} /> },
  { name: 'Vercel', icon: <SiVercel style={{ color: '#000000' }} /> }, // Vercel
  { name: 'OpenAI', icon: <SiOpenai style={{ color: '#412991' }} /> }, // OpenAI
  { name: 'Visual Studio Code', icon: <FaWindows style={{ color: '#007ACC' }} /> },
  { name: 'Figma', icon: <FaFigma style={{ color: '#F24E1E' }} /> },
];

const Skills = () => {
  return (
    <main className="skills-container">
      <h2 className="skills-header">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;



