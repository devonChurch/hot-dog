import React, {Component, PropTypes} from 'react';

const User = (props) => {

    return (
        <li className={`User ${props.isThisUser ? 'isThisUser' : ''}`}>
            {props.lockup}
            {props.miniMenu}
        </li>
    );

};

export default User;
