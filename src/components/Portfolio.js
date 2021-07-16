import React from 'react'
import Amazon from '../assets/images/amazon.png';
import Netflix from '../assets/images/netflix.png';
 const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfólio</h1>
                <div className="image-box-wrapper d-flex flex-row justify-content-center">
                    <div className="portfolio-image-box">
                        <img  className="portfolio-image" src={Amazon}alt="amazon..."/>
                        <div className="overflow"></div>
                    </div>
                    <div className="portfolio-image-box">
                        <img  className="portfolio-image" src={Netflix}alt="netflix..."/>
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;
