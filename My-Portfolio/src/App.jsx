import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

// Main portfolio layout
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-light mt-5">
        <p className="mb-0">© {new Date().getFullYear()} Khushal Singh | Web Developer</p>
      </footer>
    </div>
  );
}
