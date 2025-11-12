import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              I'm a passionate <strong>Web Developer</strong> who loves building modern,
              responsive, and user-friendly web applications using React and Bootstrap.
            </p>
            <p>
              I specialize in front-end development but also have experience in full-stack
              JavaScript. My goal is to make digital experiences both functional and
              visually appealing.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item"><strong>Education:</strong> Bachelor of Computer Applications (BCA) Expected Graduation: May 2026</li>
              <li className="list-group-item"><strong>Experience:</strong> I built two projects: one in MERN stack and one in Django/Python. You can find them in my Projects section.</li>
              <li className="list-group-item"><strong>Skills:</strong> HTML, CSS, React, Node.js,Python(Django)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
