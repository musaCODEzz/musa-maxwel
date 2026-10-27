import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="portfolio-app">
      <Header />
      <main className="portfolio-main">
        <Hero />
        <InteractiveTerminal />
        <ProjectsSection />
        <SkillsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
