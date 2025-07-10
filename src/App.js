import './App.css';
import styles from './App.module.css';
import { motion } from 'framer-motion';
import Projects from './Projects';

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

function App() {
  return (
    <div>
      <header className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <motion.img 
            src="/Profile.jpg.jpeg" 
            alt="Profile Photo" 
            className={styles.profileTopRight}
            whileHover={{ scale: 1.08, rotate: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <h1 className={styles.heroTitle}>Kareem Hassan</h1>
          <p className={styles.heroSubtitle}>Motivated and detail-oriented Computer Science fresh graduate from the British University in Egypt, with a strong interest in Software Development and Cybersecurity.</p>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}><a href="#about">About</a></li>
              <li className={styles.navItem}><a href="#projects">Projects</a></li>
              <li className={styles.navItem}><a href="#languages">Programming Languages</a></li>
              <li className={styles.navItem}><a href="#tools">Tools & Software</a></li>
              <li className={styles.navItem}><a href="#experience">Experience</a></li>
              <li className={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <motion.section id="about" className={styles.section}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionText}>Skilled in software testing, automation, and programming across multiple languages. Actively seeking opportunities to contribute to innovative projects and develop advanced technical skills in the software and security fields.</p>
          </div>
        </motion.section>
        <Projects />
        <motion.section id="languages" className={styles.section}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Programming Languages</h2>
            <ul className="skills-list">
              <li>C++</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>C</li>
              <li>HTML</li>
              <li>SQL</li>
              <li>CSS</li>
            </ul>
          </div>
        </motion.section>
        <motion.section id="tools" className={styles.section}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Tools & Software</h2>
            <ul className="skills-list">
              <li>Microsoft Office</li>
              <li>Unity</li>
              <li>Microsoft Visual Studio</li>
              <li>Cisco Packet Tracker</li>
              <li>Visual Studio</li>
              <li>Proteus</li>
              <li>NetBeans IDE</li>
              <li>Adobe</li>
              <li>SQL Server</li>
              <li>Selenium</li>
              <li>JMeter</li>
              <li>REST, SOAP APIs</li>
              <li>FastAPI</li>
            </ul>
          </div>
        </motion.section>
        <motion.section id="experience" className={styles.section}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
              Software Tester (Quality Assurance) at Tutoruu (October 2024 – March 2025)<br />
              - Automation Testing using Selenium Software by Python and Java.<br />
              - Creation of Testing Environment for Universities of Canada's B2B Mobile App and Portal.<br />
              - Creation of Testing Environment for Tutoruu App and Website.
            </p>
          </div>
        </motion.section>
        <motion.section id="contact" className={styles.section}
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <ul className={styles.contactList}>
              <li>GitHub: <a href="https://github.com/KareemHassan223452" target="_blank" rel="noopener noreferrer">KareemHassan223452</a></li>
              <li>Phone: +20 1286949710</li>
              <li>Email: kareemhassan2003@gmail.com</li>
            </ul>
          </div>
        </motion.section>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>&copy; 2025 Kareem Hassan. Your best choice.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
