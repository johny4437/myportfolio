import React from 'react';
import TestmonialsCarrousel from './TestmonialsCarrousel';

function Testmonials() {
    return (
        <div className="testmonials">
            <h1>meus clientes</h1>
            <div className="container">
                <div className="testmonials-content">
                    <TestmonialsCarrousel/>
                </div>
            </div>
        </div>
    )
}

export default Testmonials;
