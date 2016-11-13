import React, {Component, PropTypes} from 'react';
import MiniMenu from './presentation';

class MiniMenuContainer extends Component {

    render() {

        return (
            <MiniMenu {...this.props}/>
        );

    }

}

export default MiniMenuContainer;
