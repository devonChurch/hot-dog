import React, {Component, PropTypes} from 'react';

const User = (props) => {

    return (
        <li className="User">
            {props.lockup}
            {props.miniMenu}
        </li>
    );

};

export default User;
