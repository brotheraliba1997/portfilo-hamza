import AboutSection from "@/components/about/about-section";
import CertificatesSection from "@/components/certificates/certificates-section";
import ContactSection from "@/components/contact/contact-section";
import EducationSection from "@/components/education/education-section";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/hero-section";
import MarqueeWrap from "@/components/marquee/marquee-wrap";
import PhotoBreak from "@/components/photo/photo-break";
import ProjectsSection from "@/components/projects/projects-section";
import SkillsSection from "@/components/skills/skills-section";
import Image from "next/image";

export default function Home() {
  return (

    <>

    <div className="site-shell">
      <div className="network-bg" aria-hidden="true">
        <canvas width={1366} height={599} style={{ width: 1366, height: 599 }} />
        <div className="network-vignette" />
      </div>
      <Header />
      <HeroSection />
      <MarqueeWrap />
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <EducationSection />
      {/* <CertificatesSection /> */}
      {/* <PhotoBreak /> */}
      <ContactSection />
      <Footer />
      </div>

    </>

  );
}
