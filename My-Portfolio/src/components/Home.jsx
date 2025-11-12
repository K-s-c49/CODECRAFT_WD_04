import React from "react";
import profileImg from "../assets/profile.jpg"; 

export default function Home() {
  return (
    <section id="home" className="py-5 bg-light text-center">
      <div className="container">

        <img
          src={profileImg}
          alt="Profile"
          className="rounded-circle shadow mb-3"
          width="250"
          height="250"
        />

        
        <h1 className="fw-bold">Hi, I'm <span className="text-primary">Khushal Singh</span></h1>
        <p className="lead text-muted">Front-End React Developer | Back-End Development: Node.js, Express.js, Python, Django | Server-Side Technologies: Node.js, Python | Full Stack (if applicable): MERN Stack, Django/Python | Web Designer</p>

        <a href="#projects" className="btn btn-primary mt-3">
          View My Work
        </a>
      </div>
    </section>
  );
}
