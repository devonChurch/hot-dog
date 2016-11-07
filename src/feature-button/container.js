import React, {Component, PropTypes} from 'react';
import FeatureButton from './presentation';

class FeatureButtonContainer extends Component {

    render() {

        return (
            <FeatureButton {...this.props} />
        );

    }

}

export default FeatureButtonContainer;
