import React, {Component, PropTypes} from 'react';

const generateLastEdit = (props) => {

    return !props.lastEdit ? false : (
        <span className="Feedback-lastEdit">
            <span className="Feedback-lastEditLabel">Last Edited:</span>
            <span className="Feedback-lastEditTime">{props.lastEdit}</span>
        </span>
    );

};

const generateStarRating = (props) => {

    return !props.starRating ? false : (
        <div className="Feedback-starRating">
            {props.starRating}
        </div>
    );

};

const generateMiniMenu = (props) => {

    return !props.miniMenu ? false : (
        <div className="Feedback-miniMenu">
            {props.miniMenu}
        </div>
    );

};

const Feedback = (props) => {

    return (
        <li className={`Feedback Feedback--${props.color}`}>

            <div className="Feedback-badge">
                {props.badge}
            </div>

            <div className="Feedback-content">
                <span className="Feedback-name">{props.name}</span>
                <span className="Feedback-text">{props.text}</span>
                {generateLastEdit(props)}
            </div>

            {generateStarRating(props)}
            {generateMiniMenu(props)}

        </li>
    );

};

export default Feedback;
