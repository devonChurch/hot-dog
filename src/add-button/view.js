import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

class AddButton extends Component {

    render() {

        const {onClick, color} = this.props.addButton;

        return (
            <div className={`AddButton AddButton--${color}`}>
                <button
                    className="AddButton-toggle"
                    onClick={onClick}>
                    <span className="AddButton-icon">
                        <Icon icon={{type: 'plus'}}/>
                    </span>
                </button>
            </div>
        );

    }

}

export default AddButton;
