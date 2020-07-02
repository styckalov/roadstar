import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import {Link} from "react-router-dom";
const Header = () => {
    const nav = [<Link to="/hotel">Hotel</Link>
    , 'cottage', 'conference center', 'restaurant', 'bar', 'about us', 'contacts', 'news'];
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
    const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} />;
    return (
        <div className="header-container">
        <div className="header-top">
            <p className="header-number"> <span>{phoneIcon}</span> <a href="tel:+38 044 989 99">+38 044 989 99</a></p>
            <h1 className="header-title">Roadstar</h1>
            <div className="header-right">
                <p className="header-lang">EN</p>
                <p className="header-booking"><span>{calendarIcon}</span> Start booking</p>
            </div>
        </div>
        <div className="header-bottom">
            <nav className="header-nav">
                <ul className="header-items">
                    {
                        nav.map((item, key) => {
                            return (
                                <li className="header-item" key={key}>{item}</li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Header;