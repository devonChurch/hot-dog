import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU} from '../state/actions';
import Icon from '../icon/view';

const Feedback = (props) => {

    return (
        <li className={`Feedback Feedback--${props.color}`}>

            <div className="Feedback-badge">
                {props.badge}
            </div>

            <div className="Feedback-content">
                <span className="Feedback-name">{props.name}</span>
                <span className="Feedback-text">{props.text}</span>
            </div>

            <div className="Feedback-options">
                <div className="Feedback-starRating">
                    {props.starRating}
                </div>
                <div className="Feedback-miniMenu">
                    {props.miniMenu}
                </div>
            </div>

        </li>
    );

};

export default Feedback;
