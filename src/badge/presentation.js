import React, {Component, PropTypes} from 'react';
import IconContainer from '../icon/container';

const Badge = (props) => {

    return (
        <div className={`Badge Badge--${props.color}`}>
            <div className="Badge-icon">
                <IconContainer icon={props.icon}/>
            </div>
        </div>
    );
};

export default Badge;
