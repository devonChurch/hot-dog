import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_CREATE_DIALOG, SUBMIT_CREATE_DIALOG, UPDATE_CREATE_TEXT} from '../state/actions';
import Create from './presentation';
import ModalContainer from '../modal/container';
import StandardButtonContainer from '../standard-button/container';
import TextAreaContainer from '../text-area/container';

class CreateContainer extends Component {

    constructor() {

        super();
        this.onClickOffComponent = this.onClickOffComponent.bind(this);
        this.generateTextArea = this.generateTextArea.bind(this);
        this.generateStandardButton = this.generateStandardButton.bind(this);

    }

    onClickOffComponent() {

        this.props.dispatch({
            type: CLOSE_CREATE_DIALOG
        });

    }

    validateTextArea() {

        // const {textarea} = this.refs;

    }

    generateStandardButton() {

        const {color} = this.props.createState;

        const onButtonClick = (e) => {

            this.props.dispatch({
                type: SUBMIT_CREATE_DIALOG
            });
            this.onClickOffComponent();
            e.preventDefault();

        };

        return (
            <StandardButtonContainer
            color={color}
            onButtonClick={onButtonClick}
            type="submit"
            text="Done"/>
        );

    }

    generateTextArea() {

        const {color, text} = this.props.createState;

        const onTextChange = (e) => {

            console.log(e);
            console.log(e.target);
            console.log(e.target.value);

            this.props.dispatch({
                type: UPDATE_CREATE_TEXT,
                data: e.target.value
            });

        };

        return (
            <TextAreaContainer
                color={color}
                name="feedback"
                placeholder="Enter your feedback"
                value={text}
                onTextChange={onTextChange}/>
        );

    }

    render() {

        const {createState} = this.props;
        const heading = this.props.topicState[createState.topicKey].heading;

        // onTextAreaChange={this.onTextAreaChange}
        // onSubmitForm={this.onSubmitForm}

        return (
            <ModalContainer
                heading={heading}
                color={createState.color}
                isActive={createState.isActive}
                onClickOffComponent={this.onClickOffComponent}>
                <Create>
                    {this.generateTextArea()}
                    {this.generateStandardButton()}
                </Create>
            </ModalContainer>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(CreateContainer);
