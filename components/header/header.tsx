import Image from "next/image"
import Logo from "@/components/images/HAMZA LOGO.png"
import Link from "next/link"

function Header() {
    return (
        <>
            <div>
                <header className="nav-wrap" style={{ opacity: 1 }}>
                    <Link className="brand" href="#top" aria-label="HAMZA ALI">
                        <span className="brand-mark">


                            <Image
                                src={Logo}
                                alt="Portrait of Hamza Ali"
                                width={46}
                                height={46}
                                className="brand-mark-img"
                                style={{ color: "transparent" }}
                            />

                        </span>
                        <span className="brand-copy">
                            HAMZA
                            <br />
                            <small>ALI</small>
                        </span>
                    </Link>
                    <nav className="desktop-nav" aria-label="Main navigation">
                        <Link href="#about">About</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#education">Education</Link>
                        <Link href="#certificates">Certificates</Link>
                    </nav>
                    <div className="nav-actions">
                        <Link
                            href="https://wa.me/92472919116?text=Hi%20Venusha%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20software%20opportunity%20with%20you."
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
                        </Link>
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


        </>

    )
}

export default Header
