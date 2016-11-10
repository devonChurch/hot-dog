import React, {Component, PropTypes} from 'react';

const StandardButton = (props) => {

    return (
        <button
            className={`StandardButton StandardButton--${props.color}`}
            onClick={props.onButtonClick}
            type={props.type || 'button'}>
            {props.text}
        </button>
    );

};

export default StandardButton;
