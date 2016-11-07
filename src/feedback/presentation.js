import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU} from '../state/actions';
import MiniMenu from '../mini-menu/view';
import Icon from '../icon/view';

const Feedback = (props) => {

    return (
        <li className="Feedback-item">

            <div className="Feedback-badge">
                <div className="Feedback-badgeIcon">
                    <Icon icon={{
                        type: props.badge
                    }}/>
                </div>
            </div>

            <div className="Feedback-content">
                <span className="Feedback-name">{props.name}</span>
                <span className="Feedback-text">{props.text}</span>
            </div>

            <div className="Feedback-options">
                <div className="Feedback-star">
                    <div className="Feedback-starIcon">
                        <Icon icon={{type: 'star'}}/>
                    </div>
                    <div className="Feedback-starTally">{props.stars}</div>
                </div>
                <div className="Feedback-miniMenu">
                    {/*<MiniMenu miniMenu={{
                        color,
                        onToggle: this.miniMenuToggle(key),
                        options: this.miniMenuOptions(key),
                        isActive: props.isOptionsActive
                    }}/>*/}
                </div>
            </div>

        </li>
    );

};

export default Feedback;
