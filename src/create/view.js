import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_CREATE_DIALOG} from '../state/actions';
import Modal from '../modal/view';

class Create extends Component {

    constructor() {

        super();
        this.clickOutToFocus = this.clickOutToFocus.bind(this);

    }

    clickOutToFocus() {

        this.props.dispatch({
            type: CLOSE_CREATE_DIALOG
        });

    }

    render() {

        const heading = 'Banana';
        const {isActive, color} = this.props.createState;
        const {clickOutToFocus} = this;

        return (
            <Modal modal={{heading, color, isActive, clickOutToFocus}}>
                apple
            </Modal>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Create);
