import React, {Component, PropTypes} from 'react';

const Modal = (props) => {

    return (
        <div className={`Modal ${props.isActive ? 'isActive' : ''}`}>
            <div className="Modal-overlay" onClick={props.onClickOffComponent}/>
            <div className="Modal-content">
                {props.children}
            </div>
        </div>
    );

};

export default Modal;
