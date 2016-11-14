import React, {Component, PropTypes} from 'react';
import BadgeContainer from '../badge/container';

const badgeOptions = (item, key) => {

    return (
        <li
            className="Login-badgeOption"
            key={key}>
            <label
                className="Login-badgeOptionlabel"
                onClick={item.onBadgeClick}>
                <input
                    className="Login-badgeOptionRadio"
                    type="radio"
                    name="Login-badgeOption"
                    defaultChecked="false"/>
                <BadgeContainer
                    color="gray"
                    icon={item.icon}/>
            </label>
        </li>
    );

};

const Login = (props) => {

    return (
        <form className="Login">
            {props.textInput}
            <ul className="Login-badgeOptions">
                {props.badgeOptions.map(badgeOptions)}
            </ul>
            {props.submitButton}
        </form>
    );

};

export default Login;
