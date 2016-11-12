import React, {Component, PropTypes} from 'react';
import Lockup from './presentation';

class LockupContainer extends Component {

    render() {

        return (
            <Lockup {...this.props}/>
        );

    }

}

export default LockupContainer;
