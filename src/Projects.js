import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const projects = [
  {
    title: 'Graduation Project: Detection of SQL Security-Related Logic Errors in PHP Using a Large Language Model-Driven Chatbot',
    description: 'Designed a chatbot powered by LLM to identify SQL security logic errors in PHP code, enhancing early vulnerability detection. Developed backend services using FastAPI for real-time response.',
    image: '/LzZAoiUXOEddaH9PuLmFw.jpg'
  },
  {
    title: 'Automation Testing for Chairish Website (Testing Project)',
    description: 'Designed and implemented a comprehensive automation testing suite for the Chairish website using Selenium WebDriver (Java). Utilized Cucumber & Gherkin for behavior-driven development (BDD), and TestNG for test execution and reporting. Performed performance and load testing with JMeter, and created quick regression scenarios using Selenium IDE. The project focused on ensuring functional accuracy, UI consistency, and system stability under load.',
    image: '/Automation.jpg'
  },
  {
    title: 'Dental Clinic Website (Front-End)',
    description: 'Built a responsive website for dental clinic appointment scheduling using HTML, CSS, and JavaScript.',
    image: '/download (2).jpg'
  },
  {
    title: 'Cinema Reservation Website (Front-End)',
    description: 'Developed a user-friendly interface for online cinema seat selection and ticket booking.',
    image: '/download.jpg'
  },
  {
    title: 'Pharmacy Delivery System (Back-End)',
    description: 'Implemented backend services for pharmacy product ordering and delivery management using Java and SQL.',
    image: '/download (1).jpg'
  }
];

export default function Projects() {
  return (
    <motion.section id="projects" className={styles.projectsSection}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <motion.div
              className={styles.projectCard}
              key={idx}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 8px 24px rgba(30,40,90,0.18)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.projectImagePlaceholder} style={project.image ? { background: 'none' } : {}}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                ) : (
                  <span className={styles.imageText}>Image</span>
                )}
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 