import React, {Fragment} from 'react';

const Menu = () => {
    return (  
        <Fragment>
            <section className="navbar custom-navbar navbar-expand-lg fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        
                        <a href={'/ventus-app'} className="navbar-brand"><img src={process.env.PUBLIC_URL + '/images/ventus-logo-brand.png'} alt="Logo Ventus"></img></a>
                    </div>

                
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-nav-first">
                            <li><a href={'/ventus-app'} className="smoothScroll">Inicio</a></li>
                            <li><a href={'/ventus-app/nosotros'} className="smoothScroll">Nosotros</a></li>
                            <li><a href={'/ventus-app/reserva'} className="smoothScroll">Reserva</a></li>
                            <li><a href={'/ventus-app/servicios'} className="smoothScroll">Servicios</a></li>
                            
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href={'https://wa.me/573016851182'} target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"></i> (+57) 3016851182</a></li>
                        </ul>
                    </div>

                </div>
            </section>
        </Fragment>
    );
}
 
export default Menu;