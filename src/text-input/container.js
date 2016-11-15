import React, {Component, PropTypes} from 'react';
import TextInput from './presentation';

class TextInputContainer extends Component {

    render() {

        return (
            <TextInput {...this.props} />
        );

    }

}

export default TextInputContainer;
