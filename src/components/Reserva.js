import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Reserva = () => {

    return (
        <Fragment>
            <Menu></Menu>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title fix-top">
                            <h1>Información</h1>
                            <p>Debido a la contingencia por el Codiv-19 en este momento no se están realizando reservas a la cancha. Esperamos regresar pronto.</p>
                        </div>
                    </div>
                </div>
            </div>
                
            <Footer></Footer>
        </Fragment>
    );
}

export default Reserva;