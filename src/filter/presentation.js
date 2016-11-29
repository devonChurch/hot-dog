import React, {Component, PropTypes} from 'react';

const Filter = (props) => {

    return (
        <div className="Filter">
            <p>Filter by: <span>{props.selectedOption}</span></p>
            <div>{props.miniMenu}</div>
        </div>
    );

};

export default Filter;
