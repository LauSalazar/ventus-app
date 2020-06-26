import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Nosotros = () => {
    return ( 
        <Fragment>
            <Menu></Menu>
            <section id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h2>Nosotros <small>Equipo VENTUS</small></h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src={process.env.PUBLIC_URL +'/images/karen.jpg'} alt=""></img>
                                </div>
                                <div className="team-info">
                                    <h3>Karen</h3>
                                    <span>Gestión y administración</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href={'https://www.instagram.com/karen.salazar7/'} target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src={process.env.PUBLIC_URL +'/images/juli.jpg'} className="img-responsive" alt=""></img>
                                </div>
                                <div className="team-info">
                                    <h3>Juliana</h3>
                                    <span>Gestión y administración</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href={'https://www.instagram.com/julietapc4/'} target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src={process.env.PUBLIC_URL +'/images/diana.jpg'} className="img-responsive" alt=""></img>
                                </div>
                                <div className="team-info">
                                    <h3>Diana</h3>
                                    <span>Gestión y administración</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href={'https://www.instagram.com/dianapcarmonag/'} target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src={process.env.PUBLIC_URL +'/images/alejo.jpg'} className="img-responsive" alt=""></img>
                                </div>
                                <div className="team-info">
                                    <h3>Alejo</h3>
                                    <span>Entrenador</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href={'https://www.instagram.com/alejogarciaramirez/'} target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src={process.env.PUBLIC_URL +'/images/pipe.jpg'} className="img-responsive" alt=""></img>
                                </div>
                                <div className="team-info">
                                    <h3>Pipe</h3>
                                    <span>Entrenador y preparador físico</span>
                                </div>
                                <ul className="social-icon">
                                    <li><a href={'https://www.instagram.com/pipe828/'} target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Fragment>
     );
}
 
export default Nosotros;