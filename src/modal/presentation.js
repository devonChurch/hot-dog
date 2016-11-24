import React, {Component, PropTypes} from 'react';
import IconContainer from '../icon/container';

const closeButton = (props) => {

    return !props.onClickOffComponent ? false : (
        <button
            className="Modal-close"
            onClick={props.onClickOffComponent}>
            <IconContainer icon="close"/>
        </button>
    );

}

const Modal = (props) => {

    return (
        <div className={`Modal ${props.isActive ? 'isActive' : ''}`}>
            <div
                className="Modal-overlay"
                onClick={props.onClickOffComponent}/>
            <div className="Modal-content">
                {props.children}
                {closeButton(props)}
            </div>
        </div>
    );

};

export default Modal;
