import "./App.css";
import { NavBar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { UseCases } from "./components/UseCases";
import { About } from "./components/About";
import { CTA } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { ProductGallery } from "./components/ProductGallery";
import { motion } from "framer-motion";

function App() {
  // Simple fade-up variant for sections


  return (
    <>
      <header data-testid="navbar">
        <NavBar variant="glacia" />
      </header>

      <motion.main initial="hidden" animate="visible" className="overflow-x-hidden">

        <motion.section
          data-testid="hero-section"
        >
          <Hero variant="glacia" />
        </motion.section>

        <motion.section
          data-testid="product-gallery-section"
          className="mt-16"
        >
          <ProductGallery variant="glacia" />
        </motion.section>

        <motion.section
          data-testid="testimonials-section"
          className="mt-16"
        >
          <Testimonials variant="glacia" autoScroll scrollInterval={5000} />
        </motion.section>

        <motion.section
          data-testid="usecases-section"
          className="mt-16"
        >
          <UseCases variant="glacia" />
        </motion.section>

        <motion.section
          data-testid="about-section"
          className="mt-16"
        >
          <About variant="glacia" />
        </motion.section>

        <motion.section
          data-testid="cta-section"
          className="mt-16"
        >
          <CTA variant="glacia" />
        </motion.section>
      </motion.main>

      <footer data-testid="footer-section" className="mt-16">
        <Footer variant="glacia" />
      </footer>
    </>
  );
}

export default App;
