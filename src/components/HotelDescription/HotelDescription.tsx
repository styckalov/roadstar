import React from 'react';
import './HotelDescription.scss'
import home from '../../assets/home.png';
import center from '../../assets/center.png';
import restaurant from '../../assets/restaurant.png';
import bar from '../../assets/bar.png';
import MainButton from "../Button/Button";
const HotelDescription = () => {
    return (
        <div className="hotel-description__container">
            <div className="hotel-description__left">
                <div className="hotel-description__bar center">
                    <img src={home} alt=""/>
                    <div className="hotel-description">
                        <h2 className="hotel-description__title">Cocktail bar <span>&#171;Road star&#187;</span></h2>
                        <p className="hotel-description__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <MainButton buttonText='Bar card'/>
                    </div>
                </div>

                <div className="hotel-description_center center">
                    <img src={restaurant} alt=""/>
                    <div className="hotel-description">
                        <h2 className="hotel-description__title">Conference center</h2>
                        <p className="hotel-description__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <MainButton buttonText='Contacts'/>
                    </div>
                </div>
            </div>
            <div className="hotel-description__right">
                <div className="hotel-description__hotel center">
                    <div className="hotel-description">
                        <h2 className="hotel-description__title">Hotel <span>&#171;Light Hotel&#187;</span></h2>
                        <p className="hotel-description__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <MainButton buttonText='Book'/>
                    </div>
                    <img src={bar} alt=""/>
                </div>
                <div className="hotel-description__restaurant center">
                    <div className="hotel-description">
                        <h2 className="hotel-description__title">Restaurant <span>&#171;Lemins&#187;</span></h2>
                        <p className="hotel-description__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <MainButton buttonText='Menu'/>
                    </div>
                    <img src={center} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HotelDescription;