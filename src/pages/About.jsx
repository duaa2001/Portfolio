import React from 'react';
import { NavLink } from 'react-router-dom';
import myImage from '../assets/aboutimage.jpg';

// Replace these variables with your information
const firstName = 'Duaa';
const jobTitle = 'Software Developer';
const jobLocation = 'New York';
const briefJobDescription = 'Passionate about creating user-centric applications with experience in full-stack development.';
const careerObjective = 'Aiming to leverage my diverse technical skills to contribute to impactful software development projects.';
const personalLife = 'Enjoy problem-solving and value diversity as a first-generation woman of color.';

// Log the variables to ensure they are set correctly
console.log(firstName, jobTitle, jobLocation, briefJobDescription, careerObjective, personalLife);

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={myImage} alt="work life balance pic" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium color-white'>I&apos;m {firstName}, a {jobTitle} located in {jobLocation}.</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  );
};

export default About;