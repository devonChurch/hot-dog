import React, {Component, PropTypes} from 'react';
import svg from './svg';

const Icon = (props) => {

    return (
        <svg
            className="Icon"
            viewBox="0 0 24 24">
            {svg[props.icon]}
        </svg>
    );

};

export default Icon;
