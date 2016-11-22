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

    console.log('MiniMenu', props);

    return (
        <div className={`MiniMenu MiniMenu--${props.color} ${props.isOptionsActive ? 'isActive' : ''}`}>
            <a
                className="MiniMenu-toggle"
                tabIndex="0"
                onFocus={props.onMiniMenuFocus}
                onBlur={props.onMiniMenuBlur}>
                <span className="MiniMenu-icon">
                    <IconContainer icon="menuVertical"/>
                </span>
            </a>
            <ul className="MiniMenu-options">
                {props.options.map(generateOption)}
            </ul>
        </div>
    );

};

export default MiniMenu;
