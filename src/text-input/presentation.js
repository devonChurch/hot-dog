import React, {Component, PropTypes} from 'react';

const TextArea = (props) => {

    return (
        <div className={`TextArea TextArea--${props.color} ${props.value.trim().length ? 'isPopulated' : ''}`}>
            <textarea
                id={props.uniqueReference}
                className="TextArea-input"
                name={props.name}
                rows="5"
                placeholder={props.placeholder}
                minLength="1"
                value={props.value}
                onChange={props.onTextChange}/>
            <label
                className="TextArea-label"
                htmlFor={props.uniqueReference}>
                {props.label}
            </label>
            <div className="TextArea-focus"/>
        </div>
    );

};

export default TextArea;
