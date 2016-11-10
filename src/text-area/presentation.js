import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

const TextArea = (props) => {

    return (
        <div className={`TextArea TextArea--${props.color}`}>
            <textarea
                className="TextArea-input"
                name={props.name}
                rows="10"
                placeholder={props.placeholder}
                minLength="1"
                value={props.value}
                onChange={props.onTextChange}/>
        </div>
    );

};

export default TextArea;
