import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Servicios = () => {
    return (
        <Fragment>
            <Menu></Menu>
            <section id="courses">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h2>Nuestros servicios<small>Mejora, aprende y diviertete</small></h2>
                            </div>
                                <div className="col-md-12 col-sm-12 courses-item">
                                    <div className="item">
                                        <div className="courses-thumb">
                                        <div className="courses-detail">
                                                <h3><a href={'/reserva'}>Reserva de cancha</a></h3>
                                                <p>En el sector de Ciudad de Rio contamos con una cancha de voley playa disponible para que practiques y te diviertas.</p>
                                            </div>
                                            <div className="courses-top">
                                                <div className="courses-image">
                                                    <img src={process.env.PUBLIC_URL +'/images/ventus4.jpg'} className="img-responsive-override" alt=""></img>
                                                </div>
                                                <div className="courses-date">
                                                    <span><i className="fa fa-calendar"></i> Todos los dias</span>
                                                    <span><i className="fa fa-clock-o"></i> Desde las 6am hasta las 9pm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12 courses-item">
                                    <div className="item">
                                        <div className="courses-thumb">
                                            <div className="courses-detail">
                                                <h3>Ventus Kids</h3>
                                                <p>Entrenamientos enfocados a personitas de 8 a 14 años, donde desarrollamos las habilidades en el voley playa.</p>
                                            </div>
                                            <div className="courses-top">
                                                <div className="courses-image">
                                                    <img src={process.env.PUBLIC_URL +'/images/kids.jpg'} className="img-responsive-override" alt=""></img>
                                                </div>
                                                <div className="courses-date">
                                                    <span><i className="fa fa-calendar"></i>Por definir</span>
                                                    <span><i className="fa fa-clock-o"></i> Por definir</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12 courses-item">
                                    <div className="item">
                                        <div className="courses-thumb">
                                        <div className="courses-detail">
                                                <h3>Entrenamientos y preparación física</h3>
                                                <p>Contamos con entrenadores que pueden apoyarte en tu desarollo deportivo tanto en habilidades técnicas como capacidades físicas.</p>
                                            </div>
                                            <div className="courses-top">
                                                <div className="courses-image">
                                                    <img src={process.env.PUBLIC_URL +'/images/ventus7.jpg'} className="img-responsive-override" alt=""></img>
                                                </div>
                                                <div className="courses-date">
                                                    <span><i className="fa fa-calendar"></i> Por definir</span>
                                                    <span><i className="fa fa-clock-o"></i> Por definir</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-sm-12 courses-item">
                                    <div className="item">
                                        <div className="courses-thumb">
                                        <div className="courses-detail">
                                                <h3>Torneos y eventos empresariales</h3>
                                                <p>Organizamos torneos de vóley playa de carácter competitivo, además de la organización y logística de eventos deportivos empresariales  fomentando la recreación y la integración social corporativa.</p>
                                            </div>
                                            <div className="courses-top">
                                                <div className="courses-image">
                                                    <img src={process.env.PUBLIC_URL +'/images/ventus2.jpg'} className="img-responsive-override" alt=""></img>
                                                </div>
                                                <div className="courses-date">
                                                    <span><i className="fa fa-calendar"></i> Periodicamente</span>
                                                    <span><i className="fa fa-clock-o"></i> Diferentes horarios</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Fragment>
     );
}
 
export default Servicios;