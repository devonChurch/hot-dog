import React, {Component, PropTypes} from 'react';
import IconContainer from '../../icon/container';

const generateNoItems = (props) => {

    return props.feedbackList.length ? false : (
        <li className="FeedbackList-noItems">
            <div className="FeedbackList-noItemsIcon">
                <IconContainer icon="stop"/>
            </div>
            <p className="FeedbackList-noItemsText">No items</p>
        </li>
    );

};

const FeedbackList = (props) => {

    return (
        <ul className={`FeedbackList FeedbackList--${props.color}`}>
            {generateNoItems(props)}
            {props.children}
        </ul>
    );

};

export default FeedbackList;
