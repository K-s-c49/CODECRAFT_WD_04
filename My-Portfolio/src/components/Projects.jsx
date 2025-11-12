import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio made using React & Bootstrap.",
      link: "https://github.com/K-s-c49",
    },
    {
      title: "E-Commerce App",
      description: "Simple shopping site using React, Express, Node  and MongoDB.",
      link: "https://github.com/K-s-c49",
    },
    {
      title: "Weather App",
      description: "Displays live weather using an external API. In djando(Framework)",
      link: "https://github.com/K-s-c49",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <a href="https://github.com/K-s-c49" className="btn btn-outline-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
