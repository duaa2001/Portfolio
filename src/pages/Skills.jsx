import React from 'react';
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaWindows, FaFigma } from 'react-icons/fa';


const skills = [
  { name: 'Python', icon: <FaPython style={{ color: '#306998' }} /> },
  { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#F0DB4F' }} /> },
  { name: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
  { name: 'SQL', icon: <FaDatabase style={{ color: '#003B57' }} /> },
  { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} /> },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68A063' }} /> },
  { name: 'Git', icon: <FaGitAlt style={{ color: '#F05032' }} /> },
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


