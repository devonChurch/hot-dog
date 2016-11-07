import React, {Component, PropTypes} from 'react';

const Shell = (props) => {

    // const {children, shell: {heading, color}} = this.props;

    return (
        <div className={`Shell Shell--${props.color}`}>

            <header className="Shell-header">
                <h2 className="Shell-heading">{props.heading}</h2>
            </header>

            {props.children}

        </div>
    );

};

export default Shell;
