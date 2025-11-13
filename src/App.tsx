import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const certifications = [
    "Amazon Web Services Academy Cloud Foundations",
    "CISCO Computer Systems – IT Essentials",
    "CISCO NDG Linux Essentials",
    "CISCO Introduction to Networks (CCNA1)",
    "Google Cloud Foundations"
  ];

  const skills = [
    "Network Configuration and Troubleshooting",
    "Full-Stack Development",
    "Database Design and Management",
    "Programming and Web Development",
    "System Administration",
    "Cybersecurity Principles",
    "Graphic Design"
  ];

  const experienceItems = [
    "Led a small team of developers in delivering software solutions.",
    "Contributed to web app development, testing, and deployment.",
    "Supported backend and frontend integration using modern frameworks."
  ];

  const projectFeatures = [
    "JWT login system for students, lecturers, and admins",
    "QR code scanning via webcam for attendance",
    "Lecturer dashboard with session creation and analytics",
    "AI-powered attendance insights"
  ];

 const contacts = [ 
  { icon: "📧", label: "Email", value: "Mathiasparadza01@email.com", link: "mailto:Mathiasparadza01@email.com" },
  { icon: "📞", label: "Phone", value: "+260 971 546 581", link: "tel:+260971546581" },
  { icon: "💻", label: "GitHub", value: "github.com/mathiasparadza", link: "https://github.com/mathiasparadza" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/mathiasparadza", link: "https://linkedin.com/in/mathiasparadza" },
  { icon: "🏅", label: "Credly", value: "mathias-paradza", link: "https://www.credly.com/users/mathias-paradza" },
  { icon: "📍", label: "Location", value: "Lusaka, Zambia", link: null }
];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <div className="header-name-wrapper">
            <h1 className="header-name">Mathias Paradza</h1>
            <div className="header-underline"></div>
          </div>
          <p className="header-subtitle">
            Computer Science Graduate | Networking & Information Security Specialist
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-card"
        >
          <h2 className="section-title gradient-cyan">Profile Summary</h2>
          <p className="section-text">
            I am a dedicated and innovative Computer Science graduate specializing in Networking and
            Information Security. With strong skills in Full Stack Development, Network Configuration
            and Troubleshooting, and Database Management, I am passionate about building secure,
            scalable, and intelligent digital systems. I bring a creative and analytical approach to
            solving technical challenges, excelling in both independent and team-driven environments.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-card"
        >
          <h2 className="section-title gradient-cyan">Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="certification-item"
              >
                <span className="certification-check">✓</span>
                <span className="certification-text">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section-card"
        >
          <h2 className="section-title gradient-cyan">Core Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="skill-item"
              >
                <div className="skill-dot"></div>
                <span className="skill-text">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="section-card"
        >
          <h2 className="section-title gradient-blue">Professional Experience</h2>
          <div className="experience-content">
            <p className="experience-title">Junior Developer – Godspeed Technologies Limited</p>
            <p className="experience-date">Jan 2025 – Mar 2025 | Lusaka, Zambia</p>
            <div className="experience-list">
              {experienceItems.map((item, i) => (
                <div key={i} className="experience-item">
                  <span className="experience-arrow">→</span>
                  <span className="experience-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="section-card"
        >
          <h2 className="section-title gradient-blue">Major Project: QRPresence</h2>
          <div className="project-content">
            <h3 className="project-name">QRPresence</h3>
            <p className="project-description">
              A QR Code-Based Student Registration and Attendance Tracking System designed to
              enhance attendance management in academic institutions.
            </p>
            <div className="project-tech-stack">
              <p className="tech-stack-label">Role: Full-Stack Developer</p>
              <p className="tech-stack-label">Tech Stack:</p>
              <p className="tech-stack-text">
               Python(Django), React (TypeScript),OpenApi(AI analytics) Zustand/Recoil, MySQL, JWT Authentication
              </p>
            </div>
          </div>
          <div className="project-features">
            {projectFeatures.map((feature, i) => (
              <div key={i} className="project-feature-item">
                <span className="project-feature-bullet">●</span>
                <span className="project-feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="section-card"
        >
          <h2 className="section-title gradient-blue">Contact Information</h2>
          <div className="contacts-grid">
            {contacts.map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="contact-card"
              >
                <div className="contact-content">
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-info">
                    <p className="contact-label">{contact.label}</p>
                    {contact.link ? (
                      <a href={contact.link} className="contact-link">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="contact-value">{contact.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default App;