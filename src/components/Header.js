import React from "react"
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Desenvolvimento Web e Mobile</h1>
                <Typed
                className="typed-text"
                strings={["Desenvolvimento Web", "Aplicativos Android", "Facebook Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contato</a>
            </div>
        </div>
    )
}

export default Header;
