import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/images/hero2.png"

function HeroSection() {
  return (
  <section className="hero" id="top">
  <div className="hero-grid" aria-hidden="true" />
  <div className="hero-copy" style={{ opacity: 1, transform: "none" }}>
    <div className="status-pill">
      <span /> {/* */}OPEN TO SOFTWARE OPPORTUNITIES
    </div>
    <p className="hero-kicker">Hello, I’m</p>
    <h1>
      HAMZA
      <br />
      <span>ALI.</span>
    </h1>
    <div className="role-line">
      <span>I build as Link</span>
      <div className="role-window">
        <strong style={{ opacity: 1, transform: "none" }}>
          Software Engineer
        </strong>
      </div>
    </div>
    <p className="hero-text">
      I build practical digital products across web, mobile, AI/ML and DevOps —
      combining clean engineering, polished interfaces and reliable delivery for
      real-world use.
    </p>
    <div className="hero-actions">
      <Link
        href="#projects"
        className="primary-btn"
        tabIndex={0}
        style={{ transform: "none" }}
      >
        Explore my work{" "}
        <svg
          width={18}
          height={18}
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
      </Link>
      <Link
        href="https://drive.google.com/file/d/1l-CVvAQdbOB2bVRzwrkHr_E19IY2uNQ9/view?usp=drive_open"
        className="ghost-btn"
        target="_blank"
        rel="noreferrer"
        tabIndex={0}
        style={{ transform: "none" }}
      >
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className=""
        >
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>{" "}
        View CV
      </Link>
    </div>
    <div className="hero-socials">
      <Link
        href="https://github.com/vthish"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <svg
          width={18}
          height={18}
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
        </svg>
        <span>GitHub</span>
      </Link>
      <Link
        href="https://gitlab.com/vthish-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="GitLab"
      >
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className=""
        >
          <path d="M12 21 4.8 13.7l2.3-7.1h1.9L12 1l3 5.6h1.9l2.3 7.1Z" />
          <path d="M4.8 13.7 12 21l-4.3-7.3M19.2 13.7 12 21l4.3-7.3M7.7 13.7H16.3M7.1 6.6l.6 7.1M16.9 6.6l-.6 7.1" />
        </svg>
        <span>GitLab</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/venusha-thishan"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className=""
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
          <rect width={4} height={12} x={2} y={9} />
          <circle cx={4} cy={4} r={2} />
        </svg>
        <span>LinkedIn</span>
      </Link>
      <Link
        href="https://x.com/vthish_17"
        target="_blank"
        rel="noreferrer"
        aria-label="X"
      >
        <svg
          width={18}
          height={18}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className=""
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
        <span>X</span>
      </Link>
      <small>Karachi, Pakistan</small>
    </div>
  </div>
  <div className="hero-visual" style={{ opacity: 1, transform: "none" }}>
    <div className="portrait-orbit orbit-one" />
    <div className="portrait-orbit orbit-two" />
    <div className="portrait-card" style={{ transform: "none" }}>
      <div className="portrait-frame">
        {/* <img
          alt="HAMZA ALI"
          decoding="async"
          data-nimg="fill"
          className="managed-fill-image"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent"
          }}
          sizes="(max-width: 900px) 100vw, 50vw"
          srcSet="/_next/image?url=%2Fimages%2Fprofile-main.webp&w=384&q=75 384w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fprofile-main.webp&w=3840&q=75 3840w"
          src="/_next/image?url=%2Fimages%2Fprofile-main.webp&w=3840&q=75"
        /> */}


           <Image
                                src={Hero}
                                alt="Portrait of Hamza Ali"
                                width={450}
                                height={400}
                                objectFit="contain"
                                // className="brand-mark-img"
                                style={{ color: "transparent" }}
                            />


        
        <div className="portrait-overlay" />
      </div>
      <div className="portrait-caption">
        <span>Based in</span>
        <strong>
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
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx={12} cy={10} r={3} />
          </svg>{" "}
          {/* */}KARACHI PAKISTAN
        </strong>
      </div>
    </div>
    <div
      className="floating-badge badge-one"
      style={{ transform: "translateY(-5.49367px)" }}
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
        <path d="m12 3-1.2 3.2L8 7.4l2.8 1.2L12 12l1.2-3.4L16 7.4l-2.8-1.2Z" />
        <path d="m18 13-.8 2.2L15 16l2.2.8L18 19l.8-2.2L21 16l-2.2-.8Z" />
        <path d="m5 14-.6 1.5L3 16l1.4.5L5 18l.6-1.5L7 16l-1.4-.5Z" />
      </svg>
      <span>
        <small>FOCUS AREAS</small>Web • Mobile • DevOps • AI/ML
      </span>
    </div>
    <div
      className="floating-badge badge-two"
      style={{ transform: "translateY(8.81717px)" }}
    >
      <span className="terminal-dot">&lt;/&gt;</span>
      <span>
        <small>CORE STACK</small>Node.js • Nest.js • Next.js
      </span>
    </div>
  </div>
  <Link className="scroll-cue" href="#about">
    <span>SCROLL TO DISCOVER</span>
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className=""
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </Link>
</section>

  )
}

export default HeroSection
