import React, {Component, PropTypes} from 'react';

const generateTint = (props) => {

    return props.tint ? `StandardButton--${props.tint}` : '';

};

const StandardButton = (props) => {

    return (
        <div className={`StandardButton StandardButton--${props.color} ${generateTint(props)}`}>
            <button
                className="StandardButton-button"
                onClick={props.onButtonClick}
                type={props.type || 'button'}>
                {props.text}
            </button>
        </div>
    );

};

export default StandardButton;
