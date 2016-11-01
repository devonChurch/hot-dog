import React, {Component, PropTypes} from 'react';
import Shell from '../shell/view';

class Modal extends Component {

    render() {

        const {children, modal: {heading, color, isActive = false}} = this.props;

        return (
            <div className={`Modal ${isActive && 'isActive'}`}>
                <div className="Modal-content">
                    <Shell shell={{heading, color}}>
                        {children}
                    </Shell>
                </div>
            </div>
        );

    }

}

export default Modal;
