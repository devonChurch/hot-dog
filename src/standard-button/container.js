import React, {Component, PropTypes} from 'react';
import StandardButton from './presentation';

class StandardButtonContainer extends Component {

    render() {

        return (
            <div className="Container-standardButton">
                <StandardButton {...this.props} />
            </div>
        );

    }

}

export default StandardButtonContainer;
