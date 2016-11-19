import React, {Component, PropTypes} from 'react';
import IconContainer from '../icon/container';

const generateOption = (option, key) => {

    return (
        <li
            className="MiniMenu-option"
            key={key}>
            <button
                className="MiniMenu-optionButton"
                onClick={option.onOptionClick}>
                {option.heading}
            </button>
        </li>
    );

}

const MiniMenu = (props) => {

    return (
        <div className={`MiniMenu MiniMenu--${props.color} ${props.isActive ? 'isActive' : ''}`}>
            <button className="MiniMenu-toggle">
                <span className="MiniMenu-icon">
                    <IconContainer icon="menuVertical"/>
                </span>
            </button>
            <ul className="MiniMenu-options">
                {props.options.map(generateOption)}
            </ul>
        </div>
    );

};

export default MiniMenu;
