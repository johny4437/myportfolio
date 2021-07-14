import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeskpro } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <div className="services">
            <h1 className="py-5">Serviços</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Desenvolvimento WEB</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            
                        </div>
                        {/* col-2 */}
                        <div className="col-md-4 col-sm">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/>
                                </div>
                                <h3>Aplicativos Mobile</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        {/* COL-3 */}
                        <div className="col-md-4 col-sm">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>API's</h3>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Services
