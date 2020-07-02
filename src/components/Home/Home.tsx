import React, {Fragment} from 'react';
import './Home.scss'
import Header from "../Header/Header";
import HotelDescription from "../HotelDescription/HotelDescription";

const Home = () => {
    return (
        <Fragment>
        <div className="home-container">
            <h2 className="header-bottom-title">Light hotel</h2>
        </div>
        <HotelDescription/>
        </Fragment>
    );
};

export default Home;