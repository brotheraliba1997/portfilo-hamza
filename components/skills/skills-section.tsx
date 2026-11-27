import React from 'react'

function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
        <span className="eyebrow">
          <span />
          Capabilities
        </span>
        <h2>Skills that cover build, launch and scale.</h2>
        <p>
          A clearer view of the technologies, frameworks and services I work with
          across web, mobile and DevOps.
        </p>
      </div>
      <div className="skills-spotlight">
        <span>Next.js</span>
        <span>Node.js</span>
        <span>Nest.js</span>
        <span>React.js</span>

        <span>Python</span>
        <span>Docker</span>
        <span>AWS</span>
        <span>PostgreSQL</span>
        <span>TypeScript</span>
         <span>React Native</span>

        
      </div>
      <div className="skill-grid">
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
            </svg>
          </div>
          <h3>Programming Languages</h3>
          <p className="skill-summary">
            Languages I use to build practical applications across web, mobile and
            backend work.
          </p>
          <div className="skill-tags">
            <span>TypeScript</span>
            <span>JavaScript</span>
                        <span>Python</span>
            <span>Dart</span>
            
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="m12 2 9 5-9 5-9-5Z" />
              <path d="m3 12 9 5 9-5" />
              <path d="m3 17 9 5 9-5" />
            </svg>
          </div>
          <h3>Web Development</h3>
          <p className="skill-summary">
            Frontend and full-stack technologies for modern, responsive and scalable
            web products.
          </p>
          <div className="skill-tags">
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Nest.js</span>
            
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind CSS</span>
            <span>Responsive UI</span>
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <ellipse cx={12} cy={5} rx={8} ry={3} />
              <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
              <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
            </svg>
          </div>
          <h3>Backend &amp; Data</h3>
          <p className="skill-summary">
            Backend frameworks, databases and APIs used for structured, reliable
            application delivery.
          </p>
          <div className="skill-tags">
            <span>Spring Boot</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Oracle</span>
            <span>Firebase Firestore</span>
            <span>Prisma ORM</span>
            <span>REST APIs</span>
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <rect x={6} y={2} width={12} height={20} rx={2} />
              <path d="M10 18h4" />
            </svg>
          </div>
          <h3>Mobile App Development</h3>
          <p className="skill-summary">
            Cross-platform and Android-oriented mobile development for useful
            real-world products.
          </p>
          <div className="skill-tags">
            <span>React Native</span>
            
            
            <span>Firebase Auth</span>
            <span>Material Design</span>
            <span>MVVM</span>
            <span>Cross-platform Apps</span>
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.7-9H17.5a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <h3>DevOps &amp; Cloud</h3>
          <p className="skill-summary">
            Delivery-focused tooling that helps move projects from development into
            release and deployment.
          </p>
          <div className="skill-tags">
            <span>AWS</span>
            <span>EC2</span>
            <span>S3</span>
            <span>AWS Amplify</span>
            <span>Docker</span>
            <span>Docker Compose</span>
            <span>GitLab CI/CD</span>
            <span>GitHub</span>
            <span>GitLab</span>
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5V7a3 3 0 0 0-2 5.7V14a3 3 0 0 0 3 3h1.5M14.5 4A2.5 2.5 0 0 1 17 6.5V7a3 3 0 0 1 2 5.7V14a3 3 0 0 1-3 3h-1.5M12 3v18M8 10h4M12 14h4" />
            </svg>
          </div>
          <h3>AI / Machine Learning</h3>
          <p className="skill-summary">
            Building intelligent applications with machine learning, deep learning,
            NLP and AI-powered integrations for real-world use cases.
          </p>
          <div className="skill-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>Scikit-learn</span>
            <span>TensorFlow / Keras</span>
            <span>XGBoost</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>NLP</span>
            <span>Time Series Forecasting</span>
            <span>Deep Learning</span>
            <span>BiLSTM</span>
            <span>GRU</span>
            <span>Ensemble Learning</span>
            <span>Hugging Face API</span>
          </div>
        </article>
        <article className="skill-card" style={{ opacity: 1, transform: "none" }}>
          <div className="skill-icon">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5V7a3 3 0 0 0-2 5.7V14a3 3 0 0 0 3 3h1.5M14.5 4A2.5 2.5 0 0 1 17 6.5V7a3 3 0 0 1 2 5.7V14a3 3 0 0 1-3 3h-1.5M12 3v18M8 10h4M12 14h4" />
            </svg>
          </div>
          <h3>Tools &amp; Workflow</h3>
          <p className="skill-summary">
            Day-to-day workflow strengths that improve collaboration, speed and
            product quality.
          </p>
          <div className="skill-tags">
            <span>Git</span>
            <span>UI Thinking</span>
            <span>Automation</span>
            <span>Problem Solving</span>
            <span>Team Collaboration</span>
          </div>
        </article>
      </div>
      <div className="service-grid">
        <article className="service-card" style={{ opacity: 1, transform: "none" }}>
          <div className="service-icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
            </svg>
          </div>
          <h3>Web Development</h3>
          <p>
            Modern responsive websites, dashboards and full-stack web apps using
            Next.js, Node.js, Nest.js and backend integrations.
          </p>
        </article>
        <article className="service-card" style={{ opacity: 1, transform: "none" }}>
          <div className="service-icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <rect x={6} y={2} width={12} height={20} rx={2} />
              <path d="M10 18h4" />
            </svg>
          </div>
          <h3>Mobile App Development</h3>
          <p>
            Cross-platform and Android-focused mobile application development with
            Flutter and practical product thinking.
          </p>
        </article>
        <article className="service-card" style={{ opacity: 1, transform: "none" }}>
          <div className="service-icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.7-9H17.5a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <h3>DevOps &amp; Deployment</h3>
          <p>
            Dockerized workflows, cloud deployment, CI/CD pipelines and release
            support for web and mobile products.
          </p>
        </article>
        <article className="service-card" style={{ opacity: 1, transform: "none" }}>
          <div className="service-icon">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5V7a3 3 0 0 0-2 5.7V14a3 3 0 0 0 3 3h1.5M14.5 4A2.5 2.5 0 0 1 17 6.5V7a3 3 0 0 1 2 5.7V14a3 3 0 0 1-3 3h-1.5M12 3v18M8 10h4M12 14h4" />
            </svg>
          </div>
          <h3>AI / Machine Learning Solutions</h3>
          <p>
            Designing and integrating intelligent systems using machine learning,
            NLP, predictive analytics, forecasting, AI APIs, and data-driven
            automation for real-world web and mobile applications.
          </p>
        </article>
      </div>
    </section>

  )
}

export default SkillsSection
