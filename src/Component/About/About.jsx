import React from "react";
import "./About.css";
import ME from "../../assets/img/yo-about.jpg";

export function About() {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About me image" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <i class="bi bi-award"></i>
                <h5>Experience</h5>
                <small>currently studying</small>
              </article>

              <article className="about_card">
                <i class="bi bi-folder"></i>
                <h5>Proyects</h5>
                <a href="#portafolio">---</a>
              </article>
            </div>

            <p>
              Soy una persona responsable, puntual, creativa y con muy buena
              disposición para cualquier tarea que se me asigne. Demostrar mis
              capacidades, al interior de la empresa en la que pueda crecer a
              futuro tanto a nivel personal como profesional.
            </p>

            <a href="#contact" className="btn btn-primay">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
