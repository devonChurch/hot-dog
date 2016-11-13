import React, {Component, PropTypes} from 'react';
import IconContainer from '../icon/container';

const FeatureButton = (props) => {

    return (
        <div className={`FeatureButton FeatureButton--${props.color}`}>
            <button
                className="FeatureButton-toggle"
                onClick={props.onFeatureClick}>
                <span className="FeatureButton-icon">
                    <IconContainer icon="plus"/>
                </span>
            </button>
        </div>
    );

};

export default FeatureButton;
