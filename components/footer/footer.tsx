import Image from "next/image"
import Logo from "@/components/images/HAMZA LOGO.png"
import Link from "next/link"


function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="brand footer-brand" href="#top">
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
        <div className="footer-links footer-icon-links">
          <Link href="https://github.com/brotheraliba1997" target="_blank" rel="noreferrer">
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
            href="https://www.linkedin.com/in/hamza-ali-software-developer/"
            target="_blank"
            rel="noreferrer"
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

          <Link href="mailto:hamzaali1997.h@gmail.com">
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
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="m22 7-10 6L2 7" />
            </svg>
            <span>Email</span>
          </Link>
          <Link
            href="https://wa.me/923472919116?text=Hi%20Venusha%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20software%20opportunity%20with%20you."
            target="_blank"
            rel="noreferrer"
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
              <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
            </svg>
            <span>WhatsApp</span>
          </Link>
          <Link href="tel:+923472919116">
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
              <rect x={6} y={2} width={12} height={20} rx={2} />
              <path d="M10 18h4" />
            </svg>
            <span>Call me</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {/* */}2026{/* */} {/* */}Hamza Ali{/* */}. All rights reserved.
        </span>
        <span>Software Engineer · Web · Mobile · DevOps . AI/ML</span>
      </div>
    </footer>

  )
}

export default Footer
