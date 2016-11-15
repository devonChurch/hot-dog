import React, {Component, PropTypes} from 'react';

const TextInput = (props) => {

    return (
        <div className={`TextInput TextInput--${props.color} ${props.value.trim().length ? 'isPopulated' : ''}`}>
            <input
                id={props.uniqueReference}
                className="TextInput-input"
                name={props.name}
                type="text"
                minLength="1"
                value={props.value}
                onChange={props.onTextChange}/>
            <label
                className="TextInput-label"
                htmlFor={props.uniqueReference}>
                {props.label}
            </label>
            <div className="TextInput-focus"/>
        </div>
    );

};

export default TextInput;
