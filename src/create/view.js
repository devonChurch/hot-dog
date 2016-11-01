import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {ACTIVATE_FEEDBACK_DIALOG} from '../state/actions';
import Modal from '../modal/view';

class Create extends Component {

    render() {

        const heading = 'Banana';
        const {isActive, color} = this.props.createState;

        return (
            <Modal modal={{heading, color, isActive}}>
                apple
            </Modal>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Create);
