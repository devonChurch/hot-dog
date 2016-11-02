import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_CREATE_DIALOG, SUBMIT_CREATE_DIALOG} from '../state/actions';
import Modal from '../modal/view';

class Create extends Component {

    constructor() {

        super();
        this.clickOutToFocus = this.clickOutToFocus.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    clickOutToFocus() {

        this.props.dispatch({
            type: CLOSE_CREATE_DIALOG
        });

    }

    validateTextArea() {

        // const {textarea} = this.refs;

    }

    submitForm(e) {

        const {textarea} = this.refs;
        const text = textarea.value;

        this.clickOutToFocus();
        this.props.dispatch({
            type: SUBMIT_CREATE_DIALOG,
            data: text
        });
        e.preventDefault();

    }

    render() {

        const heading = 'Banana';
        const {isActive, color} = this.props.createState;
        const {clickOutToFocus} = this;

        return (
            <Modal modal={{heading, color, isActive, clickOutToFocus}}>
                <form>
                    <textarea
                        ref="textarea"
                        name="textarea"
                        rows="10"
                        placeholder="Apple"
                        minLength="1" />
                    <button onClick={this.submitForm} type="submit">Save</button>
                </form>
            </Modal>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Create);
