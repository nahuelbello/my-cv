import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ExperienceSection from "@/src/components/ExperienceSection";
import AboutSection from "@/src/components/AboutSection";
import ContactSection from "@/src/components/ContactSection";
import HomeSection from "@/src/components/HomeSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import SkillsSection from "@/src/components/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Mi Currículum Vitae
        </h1>
          {/* Sección inicial */}
          <HomeSection />
          {/* Sobre mí */}
          <AboutSection />
          {/* Experiencia */}
          <ExperienceSection />
          {/* Proyectos */}
          <ProjectsSection />
          {/* Habilidades */}
          <SkillsSection />
          {/* Contacto */}
          <ContactSection />
      </main>
      <Footer />
    </div>
  );
}