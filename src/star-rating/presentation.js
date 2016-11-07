import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

const StarRating = (props) => {

    return (
        <div className={`StarRating StarRating--${props.color}`}>
            <button
                className="StarRating-toggle"
                onClick={props.onToggleClick}>
                <div className="StarRating-icon">
                    <Icon icon="star"/>
                </div>
            </button>
            <div className="StarRating-rating">{props.rating}</div>
        </div>
    );
};

export default StarRating;
