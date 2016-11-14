import React, {Component, PropTypes} from 'react';
import TextArea from './presentation';

class TextAreaContainer extends Component {

    render() {

        return (
            <TextArea {...this.props} />
        );

    }

}

export default TextAreaContainer;
