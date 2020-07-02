import React from 'react';
import './LodgingPolicyCard.scss'

interface LodgingPolicyCardProps {
    picture: string,
    price: string,
    room: string
}
const LodgingPolicyCard = (props: LodgingPolicyCardProps ) => {
    const {room, price, picture} = props;
    return (
        <div className="lodging-policy__card">
            <img src={picture} alt=""/>
            <div className="lodging-policy__description">
                <p className="lodging-policy__room">{room}</p>
                <p className="lodging-policy__price">{price} UAH</p>
            </div>
        </div>
    );
};

export default LodgingPolicyCard;