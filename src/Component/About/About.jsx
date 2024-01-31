import React from "react";
import "./About.css";
import ME from "../../assets/img/yo-about.jpg";

export function About() {
  return (
    <>
      <section id="about">
        <h5>Conoce</h5>
        <h2>Sobre Mi </h2>

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
                <h5>Experiencia</h5>
                <small>Tecnico asistente Desarrolo de Software </small>
              </article>

              <article className="about_card">
                <i class="bi bi-folder"></i>
                <h5>Proyectos</h5>
                <a href="#portafolio">---</a>
              </article>
            </div>

            <p>
              Técnico asistente en desarrollo de software con 6 meses de
              experiencia, especializado en la automatización de procesos
              diarios en el área de cajeros para el grupo Bancolombia. Poseo
              habilidades en programas de front-end y back-end. Actualmente, me
              encuentro realizando una certificación en diseño UX/UI.
            </p>

            <a href="#contact" className="btn btn-primay">
              Contactame
            </a>
          </div>
        </div>                
      </section>
    </>
  );
}
