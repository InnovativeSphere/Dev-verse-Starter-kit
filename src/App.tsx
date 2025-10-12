import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CallToAction } from "./pages/CallToAction";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

import { fadeUp, staggerChildren } from "./utils/animations.cva";
import { Services } from "./pages/Services";

function App() {


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Router>
        {/* Navbar */}
      <div className="pb-5">
          <Navbar variant="stellar" />
      </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren(0.15)}
              >
                <motion.div variants={fadeUp} whileHover={{ scale: 1.01 }}>
                  <Home variant="stellar" />
                </motion.div>
                <motion.div variants={fadeUp} whileHover={{ scale: 1.01 }}>
                  <CallToAction variant="stellar" />
                </motion.div>
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <About variant="stellar" />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Contact variant="stellar" />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Register variant="stellar" />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Login variant="stellar" />
              </motion.div>
            }
          />

            <Route
            path="/services"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Services variant="stellar" />
              </motion.div>
            }
          />
        </Routes>    

        {/* Footer */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <Footer variant="stellar" />
        </motion.div>
      </Router>
    </div>
  );
}

export default App;
