import React from "react";
import Navbar from "./Navbar.jsx";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

     {/* Hero Section */}
<section
  id="home"
  className="position-relative d-flex flex-column justify-content-center align-items-center text-center vh-100 text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for readability */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  ></div>

  {/* Hero Content */}
  <div className="position-relative z-2 px-3">
    <h1 className="display-4 fw-bold mb-3">
      We Build Digital Experiences That Inspire
    </h1>
    <p className="lead mx-auto mb-4" style={{ maxWidth: "600px" }}>
      At <strong>AquaCode</strong>, we turn creative ideas into beautiful, responsive, and
      high-performing web applications. Let’s bring your vision to life with clean code and
      modern design.
    </p>
    <a href="#contact" className="btn btn-info btn-lg text-white fw-semibold shadow">
      Get Started
    </a>
  </div>
</section>


     {/* About Section */}
<section id="about" className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left: Text Content */}
      <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <h2 className="fw-bold mb-3 text-primary">Who We Are</h2>
        <p className="text-muted">
          At <strong>AquaCode</strong>, we’re a small team of passionate developers,
          designers, and thinkers who love creating digital experiences that make a real impact.
          From startups to growing businesses, we help our clients build modern web applications
          that are fast, responsive, and beautifully designed.
        </p>
        <p className="text-muted">
          We believe great design and clean code go hand in hand. Our mission is to turn
          complex ideas into simple, user-friendly solutions that people actually enjoy using.
        </p>
        <a href="#services" className="btn btn-outline-primary mt-3">
          Learn More
        </a>
      </div>

      {/* Right: Boxed Image */}
      <div className="col-lg-6 text-center">
        <div
          className="rounded shadow overflow-hidden mx-auto"
          style={{
            maxWidth: "400px",
            border: "5px solid #fff",
          }}
        >
          <img
            src="https://wallpaperaccess.com/full/1947484.jpg"
            alt="Team working together"
            className="img-fluid"
          />
        </div>
      </div>

    </div>
  </div>
</section>


     {/* Services Section */}
<section id="services" className="py-5 bg-light text-center">
  <div className="container">
    <h2 className="fw-bold mb-4 text-primary">What We Do Best</h2>
    <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
      At <strong>AquaCode</strong>, we specialize in creating modern, scalable, and
      user-friendly digital solutions. Our focus is on building experiences that not only
      look good but perform flawlessly.
    </p>

    <div className="row g-4">
      {/* Service 1 */}
      <div className="col-md-4">
        <div className="card border-0 shadow-sm h-100">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            className="card-img-top"
            alt="Frontend Development"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-semibold text-primary">Frontend Development</h5>
            <p className="card-text text-muted">
              We build fast, responsive, and accessible user interfaces using React and
              modern web technologies. Every project is crafted to deliver smooth
              performance and clean code.
            </p>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="col-md-4">
        <div className="card border-0 shadow-sm h-100">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            className="card-img-top"
            alt="React Applications"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-semibold text-primary">React Applications</h5>
            <p className="card-text text-muted">
              From simple landing pages to dynamic dashboards, we create scalable React
              apps tailored to your business goals — efficient, reusable, and easy to
              maintain.
            </p>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="col-md-4">
        <div className="card border-0 shadow-sm h-100">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/94/37/08/1000_F_294370899_CjLy3nMMSkm9FBsIdPvqlQgjiGrTT9kW.jpg"
            className="card-img-top"
            alt="UI/UX Design"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-semibold text-primary">UI / UX Design</h5>
            <p className="card-text text-muted">
              We design intuitive interfaces that users love. By combining creativity with
              usability, we make sure every design decision improves the overall
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="py-5 bg-light text-center position-relative">
  <div className="container">
    {/* Decorative Title */}
    <h2 className="fw-bold mb-3 text-primary position-relative d-inline-block">
      Get in Touch
      <span
        className="position-absolute start-50 translate-middle-x"
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "#0d6efd",
          bottom: "-10px",
        }}
      ></span>
    </h2>

    {/* Human-friendly description */}
    <p className="text-muted mt-4 mx-auto" style={{ maxWidth: "650px" }}>
      We’d love to hear from you! Whether you have a project idea, need help with a website, 
      or just want to say hello — our friendly team is here to listen. 
      Reach out and let’s create something amazing together.
    </p>

    {/* Contact Info */}
    <div className="mt-5">
      <h5 className="fw-semibold text-secondary mb-3">Reach Us At</h5>
      <p className="fs-5 mb-2">
        📧 <a href="mailto:hello@AquaCode.com" className="text-decoration-none text-primary fw-semibold">
          hello@AquaCode.com
        </a>
      </p>
      <p className="fs-5 mb-2">
        📞 <a href="tel:+1234567890" className="text-decoration-none text-primary fw-semibold">
          +91 81412XXXXX 
        </a>
      </p>
      <p className="fs-5 text-muted">
        📍 Shop No:1107  Business Hub Complex , Vesu road , Surat (Guj)
      </p>
    </div>

    {/* Decorative Quote or Tagline */}
    <div className="mt-5">
      <blockquote
        className="fst-italic text-secondary mx-auto"
        style={{
          maxWidth: "600px",
          borderLeft: "4px solid #0d6efd",
          paddingLeft: "20px",
        }}
      >
        “Great things are built when creativity meets clean code.”
      </blockquote>
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;