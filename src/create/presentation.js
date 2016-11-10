import React, {Component, PropTypes} from 'react';

const Create = (props) => {

    return (
        <form className="Create">
            {props.children}
        </form>
    );

};

export default Create;
