import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <section id="home">
        <div className="row">
          <div className="container item-first">
            <div className="col-md-6 col-sm-12">
              <h1>Somos Voley Playa</h1>
              <h3>
                Promocionamos la práctica del voley playa a través de procesos
                de entrenamiento, espacios para la práctica libre y organización
                de eventos con estándares de calidad y buena gestión..
              </h3>
              <a
                href={'/reserva'}
                className="section-btn btn btn-default smoothScroll"
              >
                Programa tu reserva
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>01</span>
                <h3>Reserva de cancha de voley playa</h3>
                <p>
                  En el sector de Ciudad de Rio contamos con una cancha de voley
                  playa disponible para que practiques y te diviertas.
                </p>
                <Link to={'/ventus-app/reserva'} className="btn btn-default">
                  Programa tu reserva
                </Link>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>02</span>
                <h3>Torneos y eventos</h3>
                <p>
                  Realizamos torneos periodicamente y eventos empresariales.
                </p>
                <a
                  href={'https://wa.me/573016851182'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-default"
                >
                  <i className="fa fa-mobile"></i> Pregúntanos
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="feature-thumb">
                <span>03</span>
                <h3>Entrenamientos y preparación física</h3>
                <p>
                  Contamos con entrenadores que pueden apoyarte en tu desarollo
                  deportivo tanto en habilidades técnicas como capacidades
                  físicas.
                </p>
                <Link to={'/ventus-app/servicios'} className="btn btn-default">
                  Nuestros servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
