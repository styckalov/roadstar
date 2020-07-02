import React from 'react';
import './LodgingPolicy.scss'
import LodgingPolicyCard from "../LodgingPolicyCard/LodgingPolicyCard";
import single from '../../assets/single.png'
const LodgingPolicy = () => {
    const SERVICES = [
        {
            img: 'imglink',
            title: '24/7'
        },
        {
            img: 'imglink',
            title: 'Free Wi-Fi'
        },
        {
            img: 'imglink',
            title: 'Free parking'
        },
        {
            img: 'imglink',
            title: 'Room service'
        },
        {
            img: 'imglink',
            title: 'transfer'
        },
        {
            img: 'imglink',
            title: 'Fitness room'
        },
        {
            img: 'imglink',
            title: 'Sauna'
        },
        {
            img: 'imglink',
            title: 'Laundry'
        },
        {
            img: 'imglink',
            title: 'Power station'
        },
        {
            img: 'imglink',
            title: 'Playground'
        },
    ]
    return (
        <div className="lodging-policy__container">
            <div className="lodging-policy">
                <h3 className="lodging-policy__title"><span>&#171;Light Hotel&#187;</span> accommodation</h3>
                <div className="lodging-policy__rooms">
                    <div className="lodging-policy__first-row">
                        <LodgingPolicyCard picture={single} price="1800" room="Single"/>
                        <LodgingPolicyCard picture={single} price="2300" room="Double"/>
                        <LodgingPolicyCard picture={single} price="2300" room="Twin"/>
                    </div>
                    <div className="lodging-policy__second-row">
                        <LodgingPolicyCard picture={single} price="3100" room="Junior Suite"/>
                        <LodgingPolicyCard picture={single} price="3900" room="Suite"/>
                    </div>
                </div>
                <div className="lodging-policy__services">
                    <h3 className="lodging-policy__title"><span>&#171;Roadstar&#187;</span> services</h3>
                    <div className="lodging-policy__services-grid">
                        {
                            SERVICES.map((key, index) => {
                                return (
                                    <div key={index} className="lodging-policy__grid-element">
                                        <img src={key.img} alt="Service icon"/>
                                        <p>{key.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="lodging-policy__booking">

            </div>
        </div>
    );
};

export default LodgingPolicy;