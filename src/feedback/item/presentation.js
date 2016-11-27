import React, {Component, PropTypes} from 'react';

const generateLastEdit = (props) => {

    return !props.lastEdit ? false : (
        <span className="FeedbackItem-lastEdit">
            <span className="FeedbackItem-lastEditLabel">Last Edited:</span>
            <span className="FeedbackItem-lastEditTime">{props.lastEdit}</span>
        </span>
    );

};

const generateStarRating = (props) => {

    return !props.starRating ? false : (
        <div className="FeedbackItem-starRating">
            {props.starRating}
        </div>
    );

};

const generateMiniMenu = (props) => {

    return !props.miniMenu ? false : (
        <div className="FeedbackItem-miniMenu">
            {props.miniMenu}
        </div>
    );

};

const FeedbackItem = (props) => {

    return (
        <li className={`FeedbackItem FeedbackItem--${props.color} ${props.isFeedbackVisible ? 'isVisible' : ''}`}>
            <div className="FeedbackItem-wrapper">

                <div className="FeedbackItem-badge">
                    {props.badge}
                </div>

                <div className="FeedbackItem-content">
                    <span className="FeedbackItem-name">{props.name}</span>
                    <span className="FeedbackItem-text">{props.text}</span>
                    {generateLastEdit(props)}
                </div>

                {generateStarRating(props)}
                {generateMiniMenu(props)}

            </div>
        </li>
    );

};

export default FeedbackItem;
