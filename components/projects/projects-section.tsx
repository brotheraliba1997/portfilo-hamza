import React from 'react'

function ProjectsSection() {
  return (
  <section className="section projects-section" id="projects">
  <div className="projects-heading-row">
    <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
      <span className="eyebrow">
        <span />
        Selected work
      </span>
      <h2>Projects that show the range.</h2>
      <p>
        A selection of public repositories across mobile, automation, finance,
        healthcare, safety and productivity.
      </p>
    </div>
    <a
      className="text-link"
      href="https://github.com/vthish"
      target="_blank"
      rel="noreferrer"
    >
      All GitHub projects{" "}
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className=""
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  </div>
  <div className="projects-list">
    <article
      id="project-auto-ledger"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open Auto Ledger repository"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=mus8s0ix-36ea9b97-983"
              poster="/.netlify/functions/portfolio-media?id=mus9ndwl-fe1419b6-d63"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="Auto Ledger demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open Auto Ledger video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 01</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
          <div
            className="project-video-skip"
            role="button"
            tabIndex={0}
            aria-label="Skip project video and show screenshots"
          >
            <span>Skip video</span>
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
          <div
            className="media-gallery-nav project-gallery-nav"
            aria-label="Auto Ledger media navigation"
          >
            <div
              role="button"
              tabIndex={0}
              className="media-nav-btn media-nav-prev"
              aria-label="Previous media"
            >
              <svg
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="media-nav-btn media-nav-next"
              aria-label="Next media"
            >
              <svg
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="project-gallery-status">
            <span>01 / 09</span>
            <div>
              <i className="active" />
              <i className="" />
              <i className="" />
              <i className="" />
              <i className="" />
              <i className="" />
              <i className="" />
              <i className="" />
              <i className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Full-Stack / GovTech</small>
            <span className="project-status">Completed</span>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/Auto-Ledger"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>Auto Ledger</h3>
        <p>
          A secure multi-role digital driving-licence, traffic-fine and
          penalty-points platform with two Flutter apps, a Next.js admin portal
          and a NestJS REST API deployed on AWS.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Flutter
          </span>
          <span>
            <i />
            Dart
          </span>
          <span>
            <i />
            Next.js 16
          </span>
          <span>
            <i />
            React 19
          </span>
          <span>
            <i />
            NestJS 11
          </span>
          <span>
            <i />
            TypeScript
          </span>
          <span>
            <i />
            PostgreSQL
          </span>
          <span>
            <i />
            Prisma ORM
          </span>
          <span>
            <i />
            AWS
          </span>
          <span>
            <i />
            Docker
          </span>
          <span>
            <i />
            GitLab CI/CD
          </span>
        </div>
        <div className="project-chips">
          <span>5 Roles</span>
          <span>QR Verification</span>
          <span>AWS Deployment</span>
        </div>
      </div>
    </article>
    <article
      id="project-pulsaid-android"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open PulseAid Android repository"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=mus83ow4-ae1fad20-73f"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="PulseAid Android demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open PulseAid Android video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 02</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Android / Healthcare</small>
            <span className="project-status">Completed</span>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/PulseAid-Android"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
            <a
              className="project-open project-live"
              href="https://www.linkedin.com/posts/venusha-thishan_androiddevelopment-java-mvvm-activity-7460767756444086272-csCX?utm_source=share&utm_medium=member_android&rcm=ACoAACxr2DMB33tdOg1AgzoqZBYnJiYZk1w9n-w"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>{" "}
              Live demo
            </a>
          </div>
        </div>
        <h3>PulseAid Android</h3>
        <p>
          A real-time blood donation management app connecting donors,
          hospitals, blood banks and admins through role-specific dashboards,
          emergency alerts and Firebase-backed data syncing.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Java
          </span>
          <span>
            <i />
            Firebase Firestore
          </span>
          <span>
            <i />
            Firebase Auth
          </span>
          <span>
            <i />
            Material Design
          </span>
          <span>
            <i />
            XML
          </span>
          <span>
            <i />
            MVVM
          </span>
        </div>
        <div className="project-chips">
          <span>Blood Donation</span>
          <span>Real-time</span>
          <span>Multi-role</span>
        </div>
      </div>
    </article>
    <article
      id="project-smart-expense-ai"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open Smart Expense AI repository"
      style={{ opacity: 0, transform: "translateY(26px) scale(0.985)" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=musazcos-24080cad-61a"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="Smart Expense AI demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open Smart Expense AI video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 03</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Mobile / FinTech / ML</small>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/Smart-Expense-Categorizer"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>Smart Expense AI</h3>
        <p>
          A Flutter expense tracker that understands natural-language entries,
          extracts amounts, predicts categories and supports a self-learning
          workflow through a FastAPI machine-learning backend.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Flutter
          </span>
          <span>
            <i />
            Dart
          </span>
          <span>
            <i />
            FastAPI
          </span>
          <span>
            <i />
            Python
          </span>
          <span>
            <i />
            Firebase Firestore
          </span>
          <span>
            <i />
            Firebase Auth
          </span>
          <span>
            <i />
            Scikit-learn
          </span>
          <span>
            <i />
            Pandas
          </span>
          <span>
            <i />
            Docker
          </span>
        </div>
        <div className="project-chips">
          <span>NLP</span>
          <span>Self-learning</span>
          <span>Finance</span>
        </div>
      </div>
    </article>
    <article
      id="project-hvtm-care"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open HVTM Care repository"
      style={{ opacity: 0, transform: "translateY(26px) scale(0.985)" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=mus7i6ct-7f2ef49d-52c"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="HVTM Care demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open HVTM Care video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 04</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>AI/ML / Healthcare</small>
            <span className="project-status">Completed</span>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/HVTM_Care_AI-Driven_Drug_Forecasting_System"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>HVTM Care</h3>
        <p>
          A pharmaceutical inventory forecasting platform that combines
          classical ML, BiLSTM/GRU deep learning and ensemble methods to predict
          demand and identify shortage risk.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Python
          </span>
          <span>
            <i />
            FastAPI
          </span>
          <span>
            <i />
            TensorFlow/Keras
          </span>
          <span>
            <i />
            Scikit-learn
          </span>
          <span>
            <i />
            XGBoost
          </span>
          <span>
            <i />
            Pandas/NumPy
          </span>
          <span>
            <i />
            HTML/CSS/JS
          </span>
          <span>
            <i />
            Joblib
          </span>
        </div>
        <div className="project-chips">
          <span>Forecasting</span>
          <span>Deep Learning</span>
          <span>Healthcare</span>
        </div>
      </div>
    </article>
    <article
      id="project-sentry-gas-app"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open Sentry Gas App repository"
      style={{ opacity: 0, transform: "translateY(26px) scale(0.985)" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=mus8lc22-c7a40ae2-558"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="Sentry Gas App demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open Sentry Gas App video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 05</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Safety / Application</small>
            <span className="project-status">Completed</span>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/sentry-gas-app"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>Sentry Gas App</h3>
        <p>
          A safety-related application concept focused on gas monitoring,
          alert-oriented experiences and user-friendly interaction patterns.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Flutter
          </span>
          <span>
            <i />
            Mobile
          </span>
          <span>
            <i />
            Monitoring
          </span>
        </div>
        <div className="project-chips">
          <span>Safety</span>
          <span>App</span>
        </div>
      </div>
    </article>
    <article
      id="project-synapse-ai-notes"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open Synapse AI Notes Summarize System repository"
      style={{ opacity: 0, transform: "translateY(26px) scale(0.985)" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=mus87tku-e8969975-fa0"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="Synapse AI Notes Summarize System demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open Synapse AI Notes Summarize System video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 06</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Full-Stack / Productivity</small>
            <span className="project-status">Completed</span>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/Synapse-AI-Notes-Summarize-System"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>Synapse AI Notes Summarize System</h3>
        <p>
          A secure note-taking web app with CRUD, search and subject filtering
          plus Hugging Face-powered summarization and assisted categorization,
          backed by Spring Boot and MySQL.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Java 17
          </span>
          <span>
            <i />
            Spring Boot 3
          </span>
          <span>
            <i />
            MySQL
          </span>
          <span>
            <i />
            Spring Security
          </span>
          <span>
            <i />
            Maven
          </span>
          <span>
            <i />
            Tailwind CSS
          </span>
          <span>
            <i />
            Vanilla JS
          </span>
          <span>
            <i />
            Hugging Face API
          </span>
          <span>
            <i />
            Spring Data JPA
          </span>
        </div>
        <div className="project-chips">
          <span>Summarization</span>
          <span>Authentication</span>
          <span>Search</span>
        </div>
      </div>
    </article>
    <article
      id="project-smart-file-automator"
      className="project-card has-project-image"
      role="link"
      tabIndex={0}
      aria-label="Open Smart File Automator repository"
      style={{ opacity: 0, transform: "translateY(26px) scale(0.985)" }}
    >
      <div className="project-visual">
        <div className="project-media-shell">
          <div
            className="project-gallery-frame"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <video
              className="project-demo-video"
              src="/.netlify/functions/portfolio-media?id=musat70s-4dba6aaf-95b"
              autoPlay=""
              loop=""
              playsInline=""
              preload="auto"
              aria-label="Smart File Automator demo video"
            /> */}
            <button
              type="button"
              className="project-video-click-layer"
              aria-label="Open Smart File Automator video player"
            />
          </div>
          <div className="project-screenshot-overlay" />
          <div className="project-visual-top project-visual-top-image">
            <span>PROJECT 07</span>
            <span>
              <i /> UPLOADED VIDEO
            </span>
          </div>
          <button
            type="button"
            className="project-video-open"
            aria-label="Open video player"
            title="Open video player"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className=""
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta-row">
          <div className="project-meta-label">
            <small>Automation / Productivity</small>
          </div>
          <div className="project-links">
            <a
              className="project-open"
              href="https://github.com/vthish/smart-file-automator"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.36 6.5-1.57 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9.2S17.7-.2 15 1.7a13.4 13.4 0 0 0-7 0C5.3-.2 4.1.2 4.1.2A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" />
                <path d="M8 19c-3 .9-3-1.5-4-2" />
              </svg>{" "}
              View repository{" "}
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className=""
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <h3>Smart File Automator</h3>
        <p>
          A file-automation project built to reduce repetitive manual work and
          improve how files are organized and processed.
        </p>
        <div className="project-stack-title">
          <svg
            width={14}
            height={14}
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
          </svg>{" "}
          Tech stack
        </div>
        <div className="project-tech-stack">
          <span>
            <i />
            Node.js
          </span>
          <span>
            <i />
            Automation
          </span>
          <span>
            <i />
            Utility
          </span>
        </div>
        <div className="project-chips">
          <span>Automation</span>
          <span>Files</span>
        </div>
      </div>
    </article>
  </div>
</section>

  )
}

export default ProjectsSection
