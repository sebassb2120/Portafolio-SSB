import React from "react";
import "./Experience.css";

export function Experience() {
  return (
    <>
      <section id="experience">
        <h5>Mis Habilidades </h5>
        <h2>Mis Experiencias </h2>
      </section>

      <div className="container experience_container">
        <div className="experience_fronted">
          <h3>Fronted Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>Booststrap</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>Power Bi</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>Power Apps</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <i class="bi bi-patch-check"></i>
              <div>
                <h4>Phython</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience_details">
              <i className="bi bi-patch-check" ></i>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
