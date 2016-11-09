import React, {Component, PropTypes} from 'react';
import Modal from './presentation';
import Shell from '../shell/container';

class ModalContainer extends Component {

    render() {

        return (
            <Modal
                isActive={this.props.isActive}
                onClickOffComponent={this.props.onClickOffComponent}>
                <Shell
                    color={this.props.color}
                    heading={this.props.heading}>
                    {this.props.children}
                </Shell>
            </Modal>
        );

    }

}

export default ModalContainer;
