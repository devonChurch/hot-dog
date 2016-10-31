import React, {Component, PropTypes} from 'react';

class AddButton extends Component {

    render() {

        const {onClick} = this.props.addButton;

        console.log('onClick', onClick);
        console.log('this', this);

        return (
            <div className="AddButton">
                <button
                    className="AddButton-hitBox"
                    onClick={onClick}>New</button>
            </div>
        );

    }

}

export default AddButton;
