import React, {Component, PropTypes} from 'react';
import Badge from './presentation';

class BadgeContainer extends Component {

    render() {

        return (
            <Badge {...this.props}/>
        );

    }

}

export default BadgeContainer;
