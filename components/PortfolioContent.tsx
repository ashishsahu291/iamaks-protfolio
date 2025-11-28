import AboutSection from "./sections/AboutSection";
import AchievementsSection from "./sections/AchievementsSection";
import BlogSection from "./sections/BlogSection";
import CertificationSection from "./sections/CertificationSection";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import SkillSection from "./sections/SkillSection";
import TestimonialsSection from "./sections/TestimonialsSection";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationSection />
      <AchievementsSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

export default PortfolioContent;
