import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_CREATE_DIALOG, SUBMIT_CREATE_DIALOG, UPDATE_CREATE_TEXT} from '../state/actions';
import Create from './presentation';
import ModalContainer from '../modal/container';

class CreateContainer extends Component {

    constructor() {

        super();
        this.onClickOffComponent = this.onClickOffComponent.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);

    }

    onClickOffComponent() {

        this.props.dispatch({
            type: CLOSE_CREATE_DIALOG
        });

    }

    validateTextArea() {

        // const {textarea} = this.refs;

    }

    onSubmitForm(e) {

        // const {textarea} = this.refs;
        // const text = textarea.value;

        this.onClickOffComponent();

        this.props.dispatch({
            type: SUBMIT_CREATE_DIALOG
        });

        e.preventDefault();

    }

    onTextAreaChange(e) {

        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        this.props.dispatch({
            type: UPDATE_CREATE_TEXT,
            data: e.target.value
        });

    }

    render() {

        const {createState} = this.props;
        const heading = this.props.topicState[createState.topicKey].heading;

        return (
            <ModalContainer
                heading={heading}
                color={createState.color}
                isActive={createState.isActive}
                onClickOffComponent={this.onClickOffComponent}>
                <Create
                    onTextAreaChange={this.onTextAreaChange}
                    onSubmitForm={this.onSubmitForm}/>
            </ModalContainer>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(CreateContainer);
