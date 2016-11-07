import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

const Badge = (props) => {

    return (
        <div className={`Badge Badge--${props.color}`}>
            <div className="Badge-icon">
                <Icon icon={props.icon}/>
            </div>
        </div>
    );
};

export default Badge;
