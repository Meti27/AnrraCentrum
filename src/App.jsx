import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import FleetShowcase from "./components/FleetShowcase";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-anrra-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <FleetShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;