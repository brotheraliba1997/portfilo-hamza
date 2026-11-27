
import Image from "next/image";
import hero from "@/components/images/about2 - Edited.jpg"

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
        <span className="eyebrow">
          <span />
          About me
        </span>
        <h2>Engineering ideas into real products.</h2>
        <p>
          I enjoy moving from an idea to a working product — combining software
          engineering, design awareness and practical automation to solve useful
          problems.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-photo" style={{ opacity: 1, transform: "none" }}>
          <Image
            src={hero}
            alt="Portrait of Hamza Ali"
            width={500}
            height={500}
            className="profile-image"
            priority

          />
          <div className="photo-index">/ {/* */}01</div>
        </div>
        <div className="about-copy">
          <p style={{ opacity: 1, transform: "none" }}>
            <span>My toolkit spans </span>
            <strong>
              TypeScript, JavaScript, Java, Python, Dart, Next.js, Node.js, Nest.js,
              Spring Boot, Flutter, Docker, PostgreSQL, Oracle, Prisma, AWS and
              CI/CD
            </strong>
            <span>.</span>
          </p>
          <p style={{ opacity: 1, transform: "none" }}>
            <span>I build for </span>
            <strong>
              web development, mobile app development, AI/ML development and DevOps
              delivery
            </strong>
            <span>
              {" "}
              — focusing on software that is clean, modern, scalable and useful in
              day-to-day business or product environments. I also use modern AI
              tools when they are useful for research, debugging, documentation and
              faster iteration.
            </span>
          </p>
          <div className="metric-grid">
            <div>
              <strong>07</strong>
              <span>
                GitHub projects
                <br />
                featured
              </span>
            </div>
            <div>
              <strong>03</strong>
              <span>
                Education
                <br />
                milestones
              </span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Curiosity for building</span>
            </div>
          </div>
          <div className="about-contact-strip">
            <a href="mailto:Hamzaali1997.h@gmail.com">
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
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-10 6L2 7" />
              </svg>{" "}
              {/* */}hamzaali1997.h@gmail.com
            </a>
            <a
              href="https://wa.me/923472919116?text=Hi%20Venusha%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20software%20opportunity%20with%20you."
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
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
              </svg>{" "}
              WhatsApp
            </a>
            <a href="tel:+923472919116">
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
                <rect x={6} y={2} width={12} height={20} rx={2} />
                <path d="M10 18h4" />
              </svg>{" "}
              Call me
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutSection
