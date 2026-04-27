import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All')
  const [darkMode, setDarkMode] = useState(false)

  const profile = {
    name: 'Daiwik Alluru',
    role: 'Aspiring Software Developer | MERN + AI Enthusiast',
    bio: 'I build practical web products and AI-powered solutions. I enjoy creating real-world projects that combine clean UI with meaningful backend logic.',
    phone: '+91 7569118451',
    email: 'daiwik.alluru@gmail.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    photo: '/profile.png',
  }

  const hobbies = [
    'Building full-stack side projects',
    'Exploring AI + web integration',
    'Participating in hackathons',
    'Organizing student events and communities',
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Vellore Institute of Technology, Chennai',
      year: '2022 - 2026',
      score: 'CGPA: 7.56',
    },
    {
      degree: 'Higher Secondary Certificate (PCM)',
      school: 'Valley Oak Junior College, Hyderabad',
      year: '2020 - 2022',
      score: 'Percentage: 96.3',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'SPR School of Excellence, Hyderabad',
      year: '2019 - 2020',
      score: 'CGPA: 9.8',
    },
  ]

  const projects = [
    {
      title: 'Fitness Tracker Application',
      stack: 'MongoDB, Express.js, React.js, Node.js',
      details:
        'Built secure authentication, workout logging, and progress dashboards for 3,000+ users with strong daily engagement.',
    },
    {
      title: 'AI-Powered Fraud Detection',
      stack: 'Flask, React.js, PyTorch, scikit-learn, Chrome Extension',
      details:
        'Developed a multi-layer AI system for text, URL, and file fraud checks, integrated with real-time security APIs.',
    },
    {
      title: 'AI Text Summarizer & Audiobook Generator',
      stack: 'AWS Lambda, S3, SageMaker, Polly, Python, NLP',
      details:
        'Created a serverless pipeline that summarizes long-form text and converts it into MP3 audiobooks.',
    },
  ]

  const skillGroups = {
    Languages: ['Java', 'JavaScript', 'TypeScript'],
    Web: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    Databases: ['MySQL', 'MongoDB'],
    Tools: ['VS Code', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Canva'],
    Testing: ['Cypress', 'Playwright'],
    CloudAI: ['AWS Lambda', 'S3', 'SageMaker', 'Polly', 'NLP'],
  }

  const filteredSkills = useMemo(() => {
    if (activeSkillCategory === 'All') {
      return Object.entries(skillGroups).flatMap(([group, skills]) =>
        skills.map((skill) => ({ group, skill })),
      )
    }

    return skillGroups[activeSkillCategory].map((skill) => ({
      group: activeSkillCategory,
      skill,
    }))
  }, [activeSkillCategory])

  const categories = ['All', ...Object.keys(skillGroups)]

  return (
    <div className={`portfolio ${darkMode ? 'dark' : ''}`}>
      <header className="hero">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button type="button" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </nav>

        <div className="hero-content">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <div>
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p>{profile.bio}</p>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="card">
          <h3>About Me</h3>
          <p>
            I am currently pursuing Computer Science and actively building MERN and
            AI-based applications. I like solving practical problems with scalable
            and user-friendly software.
          </p>
          <h4>Hobbies & Interests</h4>
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h3>Education</h3>
          {education.map((item) => (
            <article key={item.degree} className="timeline-item">
              <h4>{item.degree}</h4>
              <p>{item.school}</p>
              <p>
                {item.year} | {item.score}
              </p>
            </article>
          ))}
        </section>

        <section id="projects" className="card">
          <h3>Projects</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.details}</p>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="card">
          <h3>Technical Skills (Interactive Filter)</h3>
          <div className="filter-row">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={category === activeSkillCategory ? 'active' : ''}
                onClick={() => setActiveSkillCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-list">
            {filteredSkills.map(({ group, skill }) => (
              <div key={`${group}-${skill}`} className="skill-pill">
                <small>{group}</small>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="card">
          <h3>Contact</h3>
          <p>Phone: {profile.phone}</p>
          <p>Email: {profile.email}</p>
          <p>
            LinkedIn:{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Open Profile
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href={profile.github} target="_blank" rel="noreferrer">
              Open Profile
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
