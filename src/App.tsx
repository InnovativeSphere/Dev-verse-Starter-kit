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
    <div className="min-h-screen">
      <Router>
        {/* Navbar */}
          <Navbar variant="bloom" />

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
                  <Home variant="bloom" />
                </motion.div>
                <motion.div variants={fadeUp} whileHover={{ scale: 1.01 }}>
                  <CallToAction variant="bloom" />
                </motion.div>
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <About variant="bloom" />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Contact variant="bloom" />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Register variant="bloom" />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Login variant="bloom" />
              </motion.div>
            }
          />

            <Route
            path="/services"
            element={
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Services variant="bloom" />
              </motion.div>
            }
          />
        </Routes>    

        {/* Footer */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <Footer variant="bloom" />
        </motion.div>
      </Router>
    </div>
  );
}

export default App;
