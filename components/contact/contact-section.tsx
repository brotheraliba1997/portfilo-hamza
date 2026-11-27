import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import hero from "@/components/images/blue-together.png"


function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
  <div className="contact-card">
    <div style={{ opacity: 1, transform: "none" }}>
      <span className="eyebrow">
        <span />
        Let’s work together
      </span>
      <h2>
        Have Link role, product or
        <br />
        <em>wild idea?</em>
      </h2>
      <p>
        If you need help with web development, AI/ML development, mobile app
        development or DevOps-related delivery, the fastest way to start Link
        conversation is WhatsApp.
      </p>
      <div className="contact-actions">
        <Link
          href="https://wa.me/923472919116?text=Hi%20Venusha%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20software%20opportunity%20with%20you."
          className="whatsapp-btn"
          target="_blank"
          rel="noreferrer"
          tabIndex={0}
          style={{ transform: "none" }}
        >
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
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
          </svg>{" "}
          {/* */}Start on WhatsApp{/* */}{" "}
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
        <button className="mail-btn" type="button">
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
          </svg>{" "}
          {/* */}Email me
        </button>
        <Link className="phone-btn" href="tel:+94717135237">
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
          </svg>{" "}
          {/* */}Call me
        </Link>
      </div>
    </div>
    <div className="contact-portrait" style={{ opacity: 1, transform: "none" }}>
      {/* <Image
        alt="HAMZA ALI"
        loading="lazy"
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
         height= {100}
          width= {100}
        sizes="(max-width: 900px) 100vw, 50vw"
        src=""
      /> */}


        <Image
            src={hero}
            alt="Portrait of Hamza Ali"
            width={500}
            height={300}
            className="profile-image"
            priority

          />
      <div className="contact-ring ring-one" />
      <div className="contact-ring ring-two" />
    </div>
  </div>
</section>

  )
}

export default ContactSection
