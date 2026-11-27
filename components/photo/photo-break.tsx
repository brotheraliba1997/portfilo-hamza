import React from 'react'

function PhotoBreak() {
  return (
  <section className="photo-break">
  {/* <div className="photo-break-image">
    <img
      alt="Hamza Ali portfolio feature"
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
      sizes="(max-width: 900px) 100vw, 50vw"
      srcSet="/_next/image?url=%2Fimages%2Fcity.webp&w=384&q=75 384w, /_next/image?url=%2Fimages%2Fcity.webp&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fcity.webp&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fcity.webp&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fcity.webp&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fcity.webp&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fcity.webp&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fcity.webp&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fcity.webp&w=3840&q=75 3840w"
      src="/_next/image?url=%2Fimages%2Fcity.webp&w=3840&q=75"
    />
  </div> */}
  <div className="photo-break-overlay" />
  <div className="photo-break-copy">
    <div
      className="photo-break-copy-inner"
      style={{ opacity: 1, transform: "none" }}
    >
      <span>THE NEXT BUILD</span>
      <h2>
        <span>
          Good software should feel
          <br />
        </span>
        <span>simple after the hard work.</span>
      </h2>
    </div>
  </div>
</section>

  )
}

export default PhotoBreak
