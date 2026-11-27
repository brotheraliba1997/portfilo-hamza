import React from 'react'

function EducationSection() {
  return (
    <section className="section education-section" id="education">
      <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
        <span className="eyebrow">
          <span />
          Education
        </span>
        <h2>Foundation + continuous learning.</h2>
        <p>
          Formal software engineering study supported by continuous project-based
          learning.
        </p>
      </div>
      <div className="education-wrap">
        <div className="education-rail">
          <span style={{ top: "10%" }} />
          <span style={{ top: "50%" }} />
          <span style={{ top: "90%" }} />
        </div>
        <article
          className="education-card"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="education-index">01</div>

          <div className="education-icon">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m2 10 10-5 10 5-10 5Z" />
              <path d="M6 12.5V17c2.8 2.5 9.2 2.5 12 0v-4.5" />
              <path d="M22 10v6" />
            </svg>
          </div>

          <div className="education-content">
            <div className="education-meta">
              <span>2017 / 2021</span>
              <i>EDUCATION</i>
            </div>

            <h3>BS in Computer Science</h3>

            <strong>Bachelor of Science</strong>

            <p>
              Developed a strong foundation in computer science,
              programming, software development, and problem-solving,
              building the skills to pursue a career in software engineering.
            </p>
          </div>
        </article>
        <article
          className="education-card"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="education-index">02</div>

          <div className="education-icon">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx={12} cy={8} r={5} />
              <path d="m9 12-2 9 5-3 5 3-2-9" />
              <path d="m10.5 8 1 1 2-2" />
            </svg>
          </div>

          <div className="education-content">
            <div className="education-meta">
              <span>2014 / 2017</span>
              <i>EDUCATION</i>
            </div>

            <h3>Diploma in Electrical Engineering</h3>

            <strong>Electrical Engineering</strong>

            <p>
              Built a foundation in electrical engineering principles,
              electrical systems, and technical problem-solving through
              structured study and practical learning.
            </p>
          </div>
        </article>
        <article
          className="education-card"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="education-index">03</div>

          <div className="education-icon">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 2 9 5-9 5-9-5Z" />
              <path d="m3 12 9 5 9-5" />
              <path d="m3 17 9 5 9-5" />
            </svg>
          </div>

          <div className="education-content">
            <div className="education-meta">
              <span>2014</span>
              <i>EDUCATION</i>
            </div>

            <h3>Matriculation</h3>

            <strong>Science Group</strong>

            <p>
              Completed secondary education at Falcon House Grammar
              School, building a strong academic foundation in
              science, mathematics, and analytical thinking.
            </p>
          </div>
        </article>
      </div>
    </section>

  )
}

export default EducationSection
