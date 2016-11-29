import React, {Component, PropTypes} from 'react';

const Header = (props) => {

    return (
        <header className="Header">
            <div className="Header-statistics">
                {props.statisticsButton}
            </div>
            <div className="Header-filter">
                {props.filter}
            </div>
        </header>
    );

};

export default Header;
