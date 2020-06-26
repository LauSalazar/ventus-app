import React, { Fragment } from 'react';

const Contacto = () => {
  return (
    <Fragment>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="section-title">
                <h2>
                  Contactanos<small>Nos encanta conversar. Hablemos!</small>
                </h2>
              </div>

              <div className="col-md-12 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu nombre completo"
                  name="name"
                  required=""
                ></input>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo electrónico"
                  name="email"
                  required=""
                ></input>

                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Déjanos tu mensaje"
                  name="message"
                  required=""
                ></textarea>
              </div>

              <div className="col-md-4 col-sm-12">
                <input
                  type="submit"
                  className="form-control"
                  name="send message"
                  value="Enviar mensaje"
                ></input>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="contact-image">
                <img
                  src={process.env.PUBLIC_URL + '/images/ventus5.jpg'}
                  className="img-responsive"
                  alt="Smiling Two Girls"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contacto;
