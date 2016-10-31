import React, {Component, PropTypes} from 'react';

class AddButton extends Component {

    render() {

        const {onClick, color} = this.props.addButton;

        return (
            <div className={`AddButton AddButton--${color}`}>
                <button
                    className="AddButton-hitBox"
                    onClick={onClick}>New</button>
            </div>
        );

    }

}

export default AddButton;
