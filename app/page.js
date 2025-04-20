import Footer from "@/src/components/Footer";
import Experience from "@/src/components/Experience";
import AboutSection from "@/src/components/AboutSection";
import Contact from "@/src/components/Contact";
import HomeSection from "@/src/components/HomeSection";
import Education from "@/src/components/Education";
import Skills from "@/src/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-200">
      <main className="flex-grow container mx-auto px-8 py-8">
          <HomeSection />
          <AboutSection />
          <Skills />
          <Experience />
          <Education />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}