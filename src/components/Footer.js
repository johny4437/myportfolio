import React from 'react';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
  } from "react-share";
  


 const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Moscow main strreee</p>
                        </div>
                        <div className="d-flex">
                            <a  href="https://api.whatsapp.com/send?phone=5527998909001">
                                <div className="whatsapp">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                                    <span>Whatsapp</span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex">
                            <p>johnyanastaciods@gmail.com</p>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">Sobre Mim</a>
                                <br/>
                                <a className="footer-nav">Serviços</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Clientes</a>
                                <br/>
                                <a className="footer-nav">Contatos</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.youtube.com/channel/UCq3erTHXOjr45nHtTFqRDuA"}
                                quote={"Desenvolvedor FullStack"}
                                hashtag={"#javascript"}
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.youtube.com/channel/UCq3erTHXOjr45nHtTFqRDuA"}
                                quote={"Desenvolvedor FullStack"}
                                hashtag={"#javascript"}
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.youtube.com/channel/UCq3erTHXOjr45nHtTFqRDuA"}
                                quote={"Desenvolvedor FullStack"}
                                hashtag={"#javascript"}
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <RedditShareButton
                                url={"https://www.youtube.com/channel/UCq3erTHXOjr45nHtTFqRDuA"}
                                quote={"Desenvolvedor FullStack"}
                                hashtag={"#javascript"}
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;JOHNY ANASTACIO | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;