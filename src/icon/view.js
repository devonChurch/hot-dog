import React, {Component, PropTypes} from 'react';
import svg from './svg';

class Icon extends Component {

    render() {

        return (
            <svg
                className="Icon"
                viewBox="0 0 24 24">
                {svg[this.props.icon]}
            </svg>
        );

    }

}

export default Icon;
