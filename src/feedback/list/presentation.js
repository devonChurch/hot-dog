import React, {Component, PropTypes} from 'react';

const generateNoItems = (props) => {

    return props.totalFeedbackItems ? false : (
        <li className="FeedbackList-noItems">
            No items
        </li>
    );

};

const FeedbackList = (props) => {

    return (
        <ul className="FeedbackList">
            {generateNoItems(props)}
            {props.children}
        </ul>
    );

};

export default FeedbackList;
