import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

const FeatureButton = (props) => {

    return (
        <div className={`FeatureButton FeatureButton--${props.color}`}>
            <button
                className="FeatureButton-toggle"
                onClick={props.onFeatureClick}>
                <span className="FeatureButton-icon">
                    <Icon icon="plus"/>
                </span>
            </button>
        </div>
    );

};

export default FeatureButton;
