import React, {Component, PropTypes} from 'react';
import BadgeContainer from '../badge/container';

const radioProps = (item) => {

    // <input
    //     className="Login-badgeOptionRadio"
    //     type="radio"
    //     name="Login-badgeOption"
    //     defaultChecked="false"/>

    return {
            className: 'Login-badgeOptionRadio',
            type: 'radio',
            checked: item.checked,
            onChange: item.onBadgeChange
    };

    // switch (true) {
    //
    //     case item.checked:
    //         return {
    //             ...props,
    //             defaultChecked: false
    //         };
    //
    //     default:
    //         return props;
    //
    // }

};

const badgeOptions = (item, key) => {

    return (
        <li
            className="Login-badgeOption"
            key={key}>
            <label
                className="Login-badgeOptionlabel">
                <input {...radioProps(item)}/>
                <BadgeContainer
                    color="gray"
                    icon={item.badge}/>
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
