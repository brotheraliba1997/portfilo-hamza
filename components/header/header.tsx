import React from 'react'

function Header() {
    return (
        <div>
            <header className="nav-wrap" style={{ opacity: 1 }}>
                <a className="brand" href="#top" aria-label="Venusha Thishan home">
                    <span className="brand-mark">
                        <img
                            alt="VT"
                            width={46}
                            height={46}
                            decoding="async"
                            data-nimg={1}
                            className="brand-mark-img"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2Fimages%2Fvt-logo.jpg&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fvt-logo.jpg&w=96&q=75 2x"
                            src="/_next/image?url=%2Fimages%2Fvt-logo.jpg&w=96&q=75"
                        />
                    </span>
                    <span className="brand-copy">
                        HAMZA
                        <br />
                        <small>ALI</small>
                    </span>
                </a>
                <nav className="desktop-nav" aria-label="Main navigation">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#certificates">Certificates</a>
                </nav>
                <div className="nav-actions">
                    <a
                        href="https://wa.me/94717135237?text=Hi%20Venusha%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20software%20opportunity%20with%20you."
                        className="nav-hire"
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={0}
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
                        Hire me
                    </a>
                    <button className="menu-button" aria-label="Open menu">
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
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Header
