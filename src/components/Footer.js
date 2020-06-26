import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Sede administrativa</h2>
                </div>
                <address>
                  <a
                    href={'https://goo.gl/maps/9pi1G9jVvvoo5uNd7'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fa fa-map-marker"
                    attr="facebook icon"
                  >
                    Carrera 80 #47-46
                  </a>
                </address>
                <div className="section-title">
                  <h2>Sedes de entrenamiento</h2>
                </div>
                <address>
                  <p>
                    <a
                      href={'https://goo.gl/maps/PqvBLwww767Dcn4S7'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa fa-map-marker"
                      attr="facebook icon"
                    >
                      Piketeadoro
                    </a>
                  </p>
                  <p>
                    <a
                      href={'https://goo.gl/maps/Lq1LHxTrmYMYTNKc6'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa fa-map-marker"
                      attr="facebook icon"
                    >
                      Unidad Deportiva de Belén
                    </a>
                  </p>
                  <p>
                    <a
                      href={'https://goo.gl/maps/iZ3jNhkkaFeBQq5Q9'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fa fa-map-marker"
                      attr="facebook icon"
                    >
                      Unidad Deportiva Atanasio Girardot
                    </a>
                  </p>
                </address>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Información de contacto</h2>
                </div>
                <address>
                  <p>
                    <a
                      href={'https://wa.me/573016851182'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (+57) 3016851182
                    </a>
                  </p>
                  <p>
                    <a href="mailto:ventusvoleyplaya@gmail.com">
                      ventusvoleyplaya@gmail.com
                    </a>
                  </p>
                </address>
                <ul className="social-icon">
                  <li>
                    <a
                      href={'https://www.facebook.com/ventusvoleyplayaclub/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      attr="facebook icon"
                    >
                      <i className="fa fa-facebook-square"></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href={'https://www.instagram.com/ventusvoleyplaya/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href={'https://twitter.com/ventusvoley?lang=es'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>{' '}
                    </a>
                  </li>
                </ul>
                <div className="copyright-text">
                  <p>Copyright &copy; 2020 Ventus Voley Playa</p>
                  <p>Medellín, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
