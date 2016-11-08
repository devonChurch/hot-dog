import React, {Component, PropTypes} from 'react';

const Topic = (props) => {

    return (
        <article className="Topic">
            {props.children}
        </article>
    );

};

export default Topic;
