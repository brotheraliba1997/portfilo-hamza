import React from 'react'

function CertificatesSection() {
  return (
  <section className="section certificates-section" id="certificates">
  <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
    <span className="eyebrow">
      <span />
      Certificates
    </span>
    <h2>Credentials earned along the way.</h2>
    <p>
      Certifications and recognised learning milestones that support my
      engineering journey.
    </p>
  </div>
  <div className="certificate-grid">
    <a
      className="certificate-card"
      href="https://www.credly.com/badges/9be0631e-d180-4176-a2b9-3ce19885c51b/linked_in_profile"
      target="_blank"
      rel="noreferrer"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="certificate-visual">
        <div className="rotating-image-shell">
          <div className="rotating-image-slide" style={{ opacity: 1 }}>
            <img
              alt="AWS Cloud Practitioner certificate 1"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="managed-fill-image"
              src="/.netlify/functions/portfolio-media?id=mvv6dtk4-1759a5bb-3a6"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
            />
          </div>
          <div
            className="media-gallery-nav media-gallery-nav-generic"
            aria-label="AWS Cloud Practitioner certificate gallery navigation"
          >
            <div
              role="button"
              tabIndex={0}
              className="media-nav-btn media-nav-prev"
              aria-label="Previous image"
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="media-nav-btn media-nav-next"
              aria-label="Next image"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="media-gallery-dots" aria-hidden="true">
            <i className="active" />
            <i className="" />
          </div>
        </div>
        <div className="certificate-number">01</div>
      </div>
      <div className="certificate-copy">
        <div className="certificate-meta">
          <span>Amazon Web Services (AWS)</span>
          <i>16/10/2026</i>
        </div>
        <h3>AWS Cloud Practitioner</h3>
        <p>Credential ID: 9be0631e-d180-4176-a2b9-3ce19885c51b</p>
        <span className="certificate-link">
          View credential{" "}
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
        </span>
      </div>
    </a>
  </div>
</section>

  )
}

export default CertificatesSection
