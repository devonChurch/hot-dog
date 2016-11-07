import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

const generateOption = (option, key) => {

    return (
        <li className="MiniMenu-option"
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
            <button
                className="MiniMenu-toggle"
                onClick={props.onToggleClick}>
                <span className="MiniMenu-icon">
                    <Icon icon="menuVertical"/>
                </span>
            </button>
            <ul className="MiniMenu-options">
                {props.options.map(generateOption)}
            </ul>
        </div>
    );
};

export default MiniMenu;
