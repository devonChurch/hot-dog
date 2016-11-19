import React, {Component, PropTypes} from 'react';
import BadgeContainer from '../badge/container';

const wrapperTagProps = (props) => {

    const className = `Lockup Lockup--${props.color}`;

    switch (props.wrapperTag) {

        case 'button':
            return {
                className: `${className} Lockup--interactive`,
                onClick: props.onLockupClick
            };

        case 'a':
            return {
                className: `${className} Lockup--interactive`,
                href: props.href
            }

        default:
            return{
                className: className
            };

    }

};

const Lockup = (props) => {

    return (
        <props.wrapperTag {...wrapperTagProps(props)}>
            <div className="Lockup-badge">
                <BadgeContainer
                    color={props.color}
                    icon={props.icon}/>
            </div>
            <div className="Lockup-name">{props.name}</div>
        </props.wrapperTag>
    );

};

export default Lockup;
