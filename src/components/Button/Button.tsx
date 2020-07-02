import React from 'react';
import './Button.scss'
interface ButtonProps {
    buttonText: string
}

const MainButton = (props:ButtonProps) => {
    return (
        <button className="main-button">{props.buttonText}</button>
    );
};

export default MainButton;