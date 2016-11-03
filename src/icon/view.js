import React, {Component, PropTypes} from 'react';
import svg from './svg';

class Icon extends Component {

    render() {

        const {type} = this.props.icon;

        return (
            <svg
                className="Icon"
                viewBox="0 0 24 24">
                {svg[type]}
            </svg>
        );

    }

}

export default Icon;
