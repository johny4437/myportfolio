import React from 'react'
import Amazon from '../assets/images/amazon.png';
import Netflix from '../assets/images/netflix.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import {
    PopupboxManager,
    PopupboxContainer
  } from 'react-popupbox';
  import "react-popupbox/dist/react-popupbox.css";

 const Portfolio = () => {
    //  NETFLIX
    const openPopupNetflix = () =>{
        const content = (
            <>
                <img  className="portfolio-image-popup" src={Amazon}alt="amazon..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <b>GitHub:</b><a 
                className="hyper-link" 
                onClick={()=>window.open("https://github.com/johny4437/mern-stack-ecom")}
                >https://github.com/johny4437/mern-stack-ecom</a>
            </>
          )
          PopupboxManager.open({ content })
    }

    const popupboxConfig = {
        titleBar: {
          enable: true,
          text: ' Ecommerce'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    //   Amazon
      const openPopupAmazon = () =>{
        const content = (
            <>
                <img  className="portfolio-image-popup" src={Netflix}alt="amazon..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <b>GitHub:</b><a 
                className="hyper-link" 
                onClick={()=>window.open("https://github.com/johny4437/mern-stack-ecom")}
                >https://github.com/johny4437/mern-stack-ecom</a>
            </>
          )
          PopupboxManager.open({ content })
    }

    const popupboxAmazonConfig = {
        titleBar: {
          enable: true,
          text: 'Netflix'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfólio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupNetflix}>

                        <img  className="portfolio-image" src={Amazon}alt="amazon..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupAmazon} >
                        <img  className="portfolio-image" src={Netflix}alt="netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box">
                        <img  className="portfolio-image" src={Netflix}alt="netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    <div className="portfolio-image-box">
                        <img  className="portfolio-image" src={Netflix}alt="netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer  { ...popupboxConfig } />
            <PopupboxContainer  { ...popupboxAmazonConfig } />
        </div>
    )
}
export default Portfolio;
