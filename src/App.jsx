import React, { useState, useEffect, useRef } from 'react';

import {

  FaReact, FaPython, FaJava, FaMobileAlt, FaMicrochip,

  FaExternalLinkAlt, FaDownload, FaEnvelope,

  FaHtml5, FaCss3Alt, FaDatabase, FaGithub,

  FaCog, FaRobot, FaDesktop, FaMapMarkerAlt,

  FaBriefcase, FaGraduationCap

} from 'react-icons/fa';

import { FaC } from 'react-icons/fa6';

import { SiFirebase } from 'react-icons/si';

import './App.css';



const useReveal = () => {

  const ref = useRef(null);

 

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('active');

          }

        });

      },

      { threshold: 0.1 }

    );

   

    if (ref.current) {

      observer.observe(ref.current);

    }

   

    return () => {

      if (ref.current) {

        observer.unobserve(ref.current);

      }

    };

  }, []);

 

  return ref;

};



const RevealSection = ({ children, className = '', id = '' }) => {

  const ref = useReveal();

 

  return (

    <section id={id} className={`reveal ${className}`} ref={ref}>

      {children}

    </section>

  );

};



const AnimatedBackground = () => {

  const [lines, setLines] = useState([]);



  useEffect(() => {

    const newLines = Array.from({ length: 25 }).map((_, i) => ({

      id: i,

      left: `${Math.random() * 100}%`,

      width: `${Math.random() * 2 + 1}px`,

      height: `${Math.random() * 150 + 50}px`,

      animationDuration: `${Math.random() * 8 + 4}s`,

      animationDelay: `${Math.random() * 5}s`,

      opacity: Math.random() * 0.4 + 0.1,

    }));

    setLines(newLines);

  }, []);



  return (

    <div className="circuit-bg">

      {lines.map((line) => (

        <div

          key={line.id}

          className="circuit-line"

          style={{

            left: line.left,

            width: line.width,

            height: line.height,

            animationDuration: line.animationDuration,

            animationDelay: line.animationDelay,

            opacity: line.opacity,

          }}

        />

      ))}

    </div>

  );

};



const Navbar = () => {

  return (

    <nav>

      <a href="#" className="logo">PORTFOLIO<span>.</span></a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

    </nav>

  );

};



const Hero = () => {

  const [text, setText] = useState('');

  const fullText = "Frontend Development & Software Tester";



  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      if (index < fullText.length) {

        setText((prev) => prev + fullText.charAt(index));

        index++;

      } else {

        clearInterval(timer);

      }

    }, 80);

    return () => clearInterval(timer);

  }, []);



  return (

    <section id="home" className="hero reveal active">
      <div className="hero-content">
        <h1>Hi, I'm PEERAPONG</h1>
        <h2 className="typing-text">{text}</h2>
        <p>Engineering quality through precision and automation. I don't just hunt bugs; I ensure reliable software scales flawlessly.</p>
        <div className="hero-buttons">
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle">
          <FaMicrochip />
        </div>
      </div>
    </section>
  );
};


const About = () => {
  return (
    <RevealSection id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-glow"></div>
          <img src="/ME.jpg" alt="PEERAPONG PHIARPHINITKUN" className="about-image" />
        </div>

       

        <div className="about-content">

          <div className="about-header">

            <span className="about-subtitle">— ABOUT ME</span>

            <h2 className="about-title">

              PEERAPONG<br />

              <span className="accent-text">PHIARPHINITKUN</span>

            </h2>

          </div>

         

          <div className="about-text-content">

            <p>

              Industrial Technology student at <strong>KMUTNB</strong>, specializing in Electronic Engineering Technology. I am passionate about building efficient applications and solving complex technical problems through code. With a strong foundation in electronic systems, I enjoy bridging the gap between hardware and software to create innovative digital solutions.

            </p>

            <p>

              Continuously learning about emerging technologies. My goal is to leverage my background in network infrastructure and IT support to build secure, efficient systems that empower businesses. I thrive in collaborative environments and am always looking for new challenges in the world of IT operations.

            </p>

          </div>

        </div>

      </div>

    </RevealSection>

  );

};



const Education = () => {
  return (
    <RevealSection id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content edu-content">
            <div className="edu-info">
              <span className="timeline-date">2022 - 2026</span>
              <h3 className="timeline-title">Bachelor of Power Electronics Technology (ปริญญาตรี)</h3>
              <h4 className="timeline-subtitle">King Mongkut's University of Technology North Bangkok (KMUTNB)</h4>
              <p className="timeline-text">
                Focusing on physical hardware, embedded systems, and bridging the gap between high-level software programming and electronic engineering.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content edu-content">
            <div className="edu-info">
              <span className="timeline-date">2020 - 2022</span>
              <h3 className="timeline-title">High Vocational Certificate (ปวส.)</h3>
              <h4 className="timeline-subtitle">Suphanburi Technical College</h4>
              <p className="timeline-text">
                Majoring in Electronics Technology. Built a strong foundation in circuit design, microcontroller programming, and industrial electronics.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content edu-content">
            <div className="edu-info">
              <span className="timeline-date">2017 - 2020</span>
              <h3 className="timeline-title">Vocational Certificate (ปวช.)</h3>
              <h4 className="timeline-subtitle">Suphanburi Technical College</h4>
              <p className="timeline-text">
                Studied fundamental electronics, basic electrical circuits, and introductory programming concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>

  );

};



const Experience = () => {
  return (
    <RevealSection id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">Now</span>
            <h3 className="timeline-title">Software Tester </h3>
            <h4 className="timeline-subtitle">Tokiomarine</h4>
            <p className="timeline-text">
              Responsible for designing and executing test plans, identifying software defects, and ensuring the quality and reliability of web and mobile applications before deployment.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact />, level: '85%' },
    { name: 'Flutter', icon: <FaMobileAlt />, level: '80%' },
    { name: 'Python', icon: <FaPython />, level: '90%' },
    { name: 'Java', icon: <FaJava />, level: '75%' },
    { name: 'C/C++', icon: <FaC />, level: '75%' },
    { name: 'Microcontrollers', icon: <FaMicrochip />, level: '85%' },
    { name: 'HTML5', icon: <FaHtml5 />, level: '90%' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: '85%' },
    { name: 'SQL', icon: <FaDatabase />, level: '80%' },
    { name: 'Firebase', icon: <SiFirebase />, level: '75%' },
    { name: 'GitHub', icon: <FaGithub />, level: '90%' },
    { name: 'IT Support', icon: <FaCog />, level: '85%' },
    { name: 'AI Prompting', icon: <FaRobot />, level: '100%' },
    { name: 'OS Install', icon: <FaDesktop />, level: '85%' },
    { name: 'Database Info', icon: <FaDatabase />, level: '80%' }
  ];



  return (

    <RevealSection id="skills">

      <h2 className="section-title">SKILLS</h2>

      <div className="skills-container">

        {skillsData.map((skill, index) => (

          <div className="skill-item" key={index}>

            <div className="skill-header">

              <span className="skill-icon">{skill.icon}</span>

              <span className="skill-name">{skill.name}</span>

            </div>

            <div className="progress-bar">

              <div className="progress-fill" style={{ width: skill.level }}></div>

            </div>

          </div>

        ))}

      </div>

    </RevealSection>

  );

};



const Projects = () => {
  return (
    <RevealSection id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-content">
            <h3>Solar Inverter</h3>
            <p>The increasing demand for electrical energy and the growing trend of installing distributed solar power systems (Distributed Systems) have created a need for efficient energy management and sharing among various power generation sources. This is particularly important when multiple power generation systems are required to operate together to supply loads with high energy demand. A key challenge is connecting inverter systems so that they can operate in parallel safely and stably. This requires a precise control system to synchronize the voltage, frequency, and phase of the electrical signals among each inverter.</p>
            <div className="project-links">
              <a href="#"><FaExternalLinkAlt /> View Details</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Solar Tracking System</h3>
            <p>A solar tracking system maximizes solar panel energy output by keeping them perpendicular to the sun throughout the day, increasing efficiency by 20–50% compared to fixed mounts. These systems use motors, actuators, or sensors to follow the sun's path, available in single-axis (east-west) or dual-axis (east-west and altitude) configurations, commonly used in large-scale solar farms.</p>
            <div className="project-links">
              <a href="#"><FaExternalLinkAlt /> View Details</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Trading Simulator App</h3>
            <p>A mobile trading simulation application built with Flutter, integrating the CoinGecko API to fetch and display real-time cryptocurrency data.</p>
            <div className="project-links">
              <a href="#"><FaExternalLinkAlt /> View Details</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Discord Bot Management</h3>
            <p>Developed a Python-based Discord bot for a FiveM server to manage staff shifts, track case statistics, and log real-time data directly into Google Sheets.</p>
            <div className="project-links">
              <a href="#"><FaExternalLinkAlt /> View Details</a>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};



const Contact = () => {

  return (

    <RevealSection id="contact">
      <div className="contact-container">
        <div className="contact-info-section">
          <div className="about-header">
            <span className="about-subtitle">— CONTACT INFO</span>
          </div>
          <p className="contact-desc">
            Feel free to reach out. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
         

          <div className="contact-details">
            <div className="contact-info-box">
              <div className="contact-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">PHIRAPHONG9947@GMAIL.COM</span>
              </div>
            </div>

            <div className="contact-info-box">

              <div className="contact-icon-wrapper">

                <FaMapMarkerAlt />

              </div>

              <div className="contact-text">

                <span className="contact-label">LOCATION</span>

                <span className="contact-value">SUPHANBURI, THAILAND</span>

              </div>

            </div>

          </div>

        </div>



        <div className="contact-form-section">

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

            <div className="form-group">

              <input type="text" placeholder="Your Name" required />

            </div>

            <div className="form-group">

              <input type="email" placeholder="Your Email" required />

            </div>

            <div className="form-group">

              <textarea placeholder="Your Message" required></textarea>

            </div>

            <button type="submit" className="btn-solid">SEND MESSAGE</button>

          </form>

        </div>

      </div>

    </RevealSection>

  );

};



const Footer = () => {

  return (

    <footer>

      <p>&copy; 2026 PEERAPONG. Built with React & Vite.</p>

    </footer>

  );

};



const App = () => {

  return (

    <>

      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>

  );

};



export default App;