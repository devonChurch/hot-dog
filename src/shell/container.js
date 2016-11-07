import React, {Component, PropTypes} from 'react';
import Shell from './presentation';

class ShellContainer extends Component {

    render() {

        return (
            <Shell {...this.props} />
        );

    }

}

export default ShellContainer;
