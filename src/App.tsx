import React from "react";
import { motion } from "framer-motion";
import "./App.css";

type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  items: string[];
};

type Project = {
  name: string;
  meta: string;
  description: string;
  role: string;
  stack: string;
  features: string[];
  link?: { label: string; href: string };
  image?: { src: string; alt: string };
};

const experience: Experience[] = [
  {
    role: "Home Broadband Installer",
    company: "Airtel Zambia Plc",
    dates: "Dec 2025 – Present",
    location: "Lusaka, Zambia",
    items: [
      "Install, configure and test network equipment against defined technical requirements, ensuring service quality and functionality.",
      "Act as first point of contact for end users, diagnosing and resolving connectivity and technical faults to maintain service standards.",
      "Engage directly with customers: scheduling installations, reviewing paperwork, educating users on product features and ensuring satisfaction.",
      "Submit daily technical reports."
    ]
  },
  {
    role: "Junior Engineer Intern",
    company: "Daylight Technologies Zambia Ltd",
    dates: "Jan 2025 – Apr 2025",
    location: "Lusaka, Zambia",
    items: [
      "Served as the first-response support link between business users, clients and Tier 1 technical teams.",
      "Resolved user queries on system lags, failures, usability issues and access difficulties, and provided general system guidance.",
      "Onboarded clients across multiple systems, explaining technical steps in simple, practical language.",
      "Supported account creation, monitored systems for errors and relayed user feedback to technical teams for follow-up.",
      "Supported web development and system-management activities, including testing, issue resolution, maintenance and technical documentation."
    ]
  }
];

const projects: Project[] = [
  {
    name: "The Apostles' Church Website",
    meta: "Live Project · 2024 – Present",
    description:
      "The official website of The Apostles' Church in Zambia. Where visitors can learn about the church's history, beliefs and community, explore Bible teaching resources and find a church near them.",
    role: "Sole Developer",
    stack: "HTML5 · CSS3 · JavaScript · Bootstrap 5 · Node.js · GitHub Actions · GitHub Pages",
    features: [
      "A seven-step 'Begin Your Journey with Christ' guide, each step backed by scripture and a short teaching.",
      "Teaching articles and a Digital Library covering Bible questions, faith, marriage and family, youth, and science and the Bible.",
      "Church history, Articles of Faith, governance and membership pages, plus a church finder with Google Maps directions.",
      "Site-wide search across all pages, with Ctrl/Cmd+K and '/' keyboard shortcuts.",
      "Responsive, accessible design, deployed automatically to GitHub Pages through GitHub Actions."
    ],
    link: {
      label: "View live site",
      href: "https://mathiasparadza.github.io/The-Apostles-Church"
    },
    image: {
      src: `${process.env.PUBLIC_URL}/images/apostles-church.webp`,
      alt: "The Apostles' Church website home page"
    }
  },
  {
    name: "QRPresence",
    meta: "Major Project",
    description:
      "QR code-based student registration and attendance tracking system for academic institutions.",
    role: "Full-Stack Developer",
    stack: "Python (Django) · React (TypeScript) · Zustand/Recoil · MySQL · JWT · OpenAI API",
    features: [
      "Built a JWT login system with role-based access for students, lecturers and admins.",
      "Implemented webcam QR code scanning to record attendance.",
      "Developed a lecturer dashboard for session creation and attendance analytics, with AI-powered insights."
    ],
    image: {
      src: `${process.env.PUBLIC_URL}/images/qrpresence.PNG`,
      alt: "QRPresence attendance system screenshot"
    }
  },
  {
    name: "Goodspeed Technologies: Company Website (Demo)",
    meta: "Practice Project",
    description:
      "A responsive single-page website for a fictional technology company, built to practise front-end development.",
    role: "Front-End Developer",
    stack: "HTML5 · CSS3 · JavaScript · Bootstrap 5 · Swiper.js · Font Awesome · GitHub Actions · GitHub Pages",
    features: [
      "Mobile-first layout tested from 320px phones up to desktop.",
      "Auto-playing services slider, plus cards you can swipe sideways on mobile.",
      "A “How can we help?” popup that fades in and out.",
      "Contact and newsletter forms that work without a server.",
      "Automatic deployment to GitHub Pages on every push."
    ],
    link: {
      label: "View live demo",
      href: "https://mathiasparadza.github.io/Goodspeed-Technologies/"
    },
    image: {
      src: `${process.env.PUBLIC_URL}/images/goodspeed.webp`,
      alt: "Goodspeed Technologies demo website home page"
    }
  },
  {
    name: "Hospital Management System",
    meta: "Course Project",
    description:
      "Web system streamlining patient registration, appointments, staff management and medical records.",
    role: "Full-Stack Developer",
    stack: "PHP · JavaScript · HTML · CSS · MySQL",
    features: [
      "Designed and implemented core hospital workflows.",
      "Built user interfaces for doctors, nurses and admin staff.",
      "Developed a secure PHP backend for patient and appointment data, with MySQL storage for medical history and billing."
    ]
  },
  {
    name: "Beowulf Cluster (Virtual & Physical)",
    meta: "Course Project",
    description:
      "Hybrid Beowulf cluster of virtual and physical machines for distributed and parallel computing.",
    role: "Systems Administrator / Cluster Engineer",
    stack: "Linux Administration · Networking · MPI/OpenMP · Parallel Computing",
    features: [
      "Configured Linux nodes, SSH, networking, NFS and shared directories across the cluster.",
      "Set up cluster management tools and deployed MPI/OpenMP workloads.",
      "Optimised inter-node performance."
    ]
  }
];

const competencies = [
  { area: "IT & User Support", detail: "Tier 1–2 help desk, first-point-of-contact support, onboarding, access management" },
  { area: "Networking & Infrastructure", detail: "Network equipment setup and testing, LAN/WAN troubleshooting, Linux administration" },
  { area: "Software & Web Development", detail: "Full-stack web apps, responsive websites, testing, CI/CD deployment" },
  { area: "Cybersecurity", detail: "Security best practices, threat detection, access control, data confidentiality" },
  { area: "Incident & Records Management", detail: "Tracking faults to resolution, escalation, IT asset and user records" },
  { area: "Communication & Documentation", detail: "User training, customer engagement, technical reports, stakeholder updates" }
];

const technicalSkills = [
  { area: "Networking", items: ["LAN/WAN", "Routing & switching", "Device setup & configuration"] },
  { area: "Programming", items: ["Python", "JavaScript", "React", "Node.js", "PHP", "HTML", "CSS", "Bootstrap", "APIs"] },
  { area: "Databases", items: ["SQL & NoSQL design", "SQL optimisation"] },
  { area: "Operating Systems", items: ["Windows", "macOS", "Linux (Ubuntu)"] },
  { area: "Systems Repair", items: ["Hardware", "Software"] },
  { area: "Cybersecurity", items: ["Threat detection", "Network vulnerabilities", "Privacy & data confidentiality"] },
  { area: "Tools & Platforms", items: ["Git & GitHub", "GitHub Actions", "GitHub Pages", "VS Code", "Nmap", "Microsoft 365", "Google Workspace"] }
];

const professionalSkills = [
  "Leadership and teamwork",
  "Adaptable and innovative thinker",
  "Strong oral and written communication",
  "Interpersonal and presentation skills"
];

const education = [
  {
    qualification: "Bachelor's Degree in Computer Science, Networking & Information Security",
    institution: "University of Zambia",
    detail: "Completed Nov 2025 (Credit)"
  },
  {
    qualification: "Grade 12 Certificate",
    institution: "David Kaunda Technical Secondary School",
    detail: "Completed Dec 2020"
  }
];

const certifications = [
  "Cisco CyberOps Associate",
  "Cisco CCNAv7: Introduction to Networks",
  "Cisco CCNA IT Essentials",
  "Cisco Introduction to Cybersecurity",
  "NDG Linux Essentials",
  "AWS Academy Cloud Foundations",
  "Google Cloud Foundations"
];

const contacts = [
  { icon: "📧", label: "Email", value: "Mathiasparadza01@email.com", link: "mailto:Mathiasparadza01@email.com" },
  { icon: "📞", label: "Phone", value: "+260 971 546 581 / +260 768 619 298", link: "tel:+260971546581" },
  { icon: "💻", label: "GitHub", value: "github.com/mathiasparadza", link: "https://github.com/mathiasparadza" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/mathiasparadza", link: "https://linkedin.com/in/mathiasparadza" },
  { icon: "🏅", label: "Credly (View Certifications)", value: "mathias-paradza", link: "https://www.credly.com/users/mathias-paradza" },
  { icon: "📍", label: "Location", value: "Lusaka, Zambia", link: null }
];

const isExternal = (href: string) => href.startsWith("http");

// Each section fades in as it scrolls into view, so order on screen always
// matches order of appearance.
const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6 }
};

function App() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">

        {/* ---------- HEADER ---------- */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <div className="profile-photo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Mathias Paradza"
              className="profile-photo"
            />
          </div>

          <div className="header-name-wrapper">
            <h1 className="header-name">Mathias Paradza</h1>
            <div className="header-underline"></div>
          </div>

          <p className="header-subtitle">
            Networking & Information Security | IT & User Support | Full-Stack Developer
          </p>
        </motion.header>

        {/* ---------- PROFESSIONAL SUMMARY ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-cyan">Professional Summary</h2>
          <p className="section-text">
            Computer Science graduate in Networking &amp; Information Security from the University of
            Zambia, with hands-on experience across IT and user support, network installation and
            troubleshooting, and full-stack development, from first-line support for users and clients
            to building and deploying live websites and web applications. Skilled in networking,
            programming, databases, Linux administration, computer repair and cybersecurity. A
            dependable, detail-oriented and analytical problem-solver who learns quickly and works
            equally well in a team or independently.
          </p>
        </motion.section>

        {/* ---------- EXPERIENCE ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-blue">Professional Experience</h2>
          {experience.map((job) => (
            <div key={job.company} className="experience-content">
              <p className="experience-title">
                {job.role} – {job.company}
              </p>
              <p className="experience-date">
                {job.dates} | {job.location}
              </p>
              <div className="experience-list">
                {job.items.map((item) => (
                  <div key={item} className="experience-item">
                    <span className="experience-arrow">→</span>
                    <span className="experience-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* ---------- PROJECTS ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-blue">Projects</h2>
          {projects.map((project) => (
            <div key={project.name} className="project-block">
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-meta">{project.meta}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  <div className="project-tech-stack">
                    <p className="tech-stack-label">Role: {project.role}</p>
                    <p className="tech-stack-text">{project.stack}</p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link.href}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.label} ↗
                    </a>
                  )}
                </div>
              </div>

              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="project-image"
                  />
                </div>
              )}

              <div className="project-features">
                {project.features.map((feature) => (
                  <div key={feature} className="project-feature-item">
                    <span className="project-feature-bullet">●</span>
                    <span className="project-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* ---------- CORE COMPETENCIES ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-cyan">Core Competencies</h2>
          <div className="skills-grid">
            {competencies.map((c) => (
              <div key={c.area} className="skill-item skill-item-stacked">
                <div className="skill-heading">
                  <div className="skill-dot"></div>
                  <span className="skill-area">{c.area}</span>
                </div>
                <span className="skill-text">{c.detail}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ---------- TECHNICAL & PROFESSIONAL SKILLS ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-cyan">Technical Skills</h2>
          <div className="tech-skills">
            {technicalSkills.map((group) => (
              <div key={group.area} className="tech-skill-row">
                <p className="tech-skill-area">{group.area}</p>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Professional Skills</h3>
          <div className="tag-list">
            {professionalSkills.map((s) => (
              <span key={s} className="tag tag-soft">{s}</span>
            ))}
          </div>
        </motion.section>

        {/* ---------- EDUCATION ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-blue">Education</h2>
          {education.map((e) => (
            <div key={e.qualification} className="experience-content">
              <p className="experience-title">{e.qualification}</p>
              <p className="experience-date">
                {e.institution} | {e.detail}
              </p>
            </div>
          ))}
        </motion.section>

        {/* ---------- CERTIFICATIONS ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-cyan">Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert) => (
              <div key={cert} className="certification-item">
                <span className="certification-check">✓</span>
                <span className="certification-text">{cert}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ---------- CONTACT ---------- */}
        <motion.section {...reveal} className="section-card">
          <h2 className="section-title gradient-blue">Contact Information</h2>
          <div className="contacts-grid">
            {contacts.map((contact) => (
              <div key={contact.label} className="contact-card">
                <div className="contact-content">
                  <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                  <div className="contact-info">
                    <p className="contact-label">{contact.label}</p>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="contact-link"
                        {...(isExternal(contact.link)
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="contact-value">{contact.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default App;
