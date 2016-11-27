import React, {Component, PropTypes} from 'react';
import IconContainer from '../icon/container';

const StarRating = (props) => {

    return (
        <div className={`StarRating StarRating--${props.color} ${props.rating.length ? 'isActive' : ''}`}>
            <button
                className="StarRating-toggle"
                onClick={props.onToggleClick}>
                <div className="StarRating-icon">
                    <IconContainer icon="star"/>
                </div>
            </button>
            <div className="StarRating-rating">{props.rating.length}</div>
        </div>
    );
};

export default StarRating;
