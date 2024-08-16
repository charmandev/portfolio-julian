import React, { useState, useEffect, useRef } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css";

const AccordionItem = ({ index, title, isActive, codeString }) => (
  <div className={`accordion-item ${isActive ? "active" : ""}`}>
    <div className="accordion-title">{title}</div>
    <div className={`accordion-content ${isActive ? "active" : ""}`}>
      <CodeDisplay codeString={codeString} />
    </div>
  </div>
);

const ScrollableCodeDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const marginTop = 100; // Adjust this value for margin from the top
      const marginBottom = 300; // Adjust this value for margin from the bottom

      accordionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const refTop = top + window.scrollY;
          const refBottom = bottom + window.scrollY;

          // Activate the accordion if it is within the viewport margin range
          if (
            refBottom > window.scrollY - marginTop &&
            refTop < scrollPosition - marginBottom
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially to check the position of elements
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const codeSamples = [
    `const project1 = {
      name: 'AI Powered Financial App',
      tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
      myRole: 'Backend Developer',
      description: 'Me and my team built an AI-powered financial mobile application. I developed APIs using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI\'s latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.',
    };`,

    `const project2 = {
      name: 'E-commerce Platform',
      tools: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'Cloudinary', 'AWS S3', 'Heroku'],
      myRole: 'Full Stack Developer',
      description: 'Developed a scalable e-commerce platform with a team. I was responsible for both front-end and back-end development. Implemented user authentication, product management, and payment processing using Stripe API. Integrated Cloudinary for image storage and AWS S3 for handling static assets. The platform supports user roles, shopping carts, and order history. Deployed on Heroku for production.',
    };`,

    `const project3 = {
      name: 'Social Media Analytics Tool',
      tools: ['Django', 'React', 'PostgreSQL', 'Celery', 'RabbitMQ', 'Redis', 'Google Analytics API', 'Docker', 'Nginx'],
      myRole: 'Data Engineer',
      description: 'Led the development of a social media analytics tool for tracking and analyzing user engagement across platforms. Built data pipelines using Django and Celery to process large datasets in real-time. Integrated Google Analytics API to fetch user data and Redis for caching. The tool provides insights through interactive dashboards built with React. Deployed the solution using Docker and Nginx for scalability.',
    };`,
  ];

  return (
    <div className="accordion-wrapper">
      <div className="title-wrapper">
        <div className="line"></div>
        <h3 className="projects-title">Proyectos</h3>
        <div className="line"></div>
      </div>
      {codeSamples.map((code, index) => (
        <div key={index} ref={(el) => (accordionRefs.current[index] = el)}>
          <AccordionItem
            index={index}
            title={`Proyecto ${index + 1}`}
            isActive={activeIndex === index}
            codeString={code}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollableCodeDisplay;
