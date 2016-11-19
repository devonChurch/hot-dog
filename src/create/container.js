import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
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
            type: action.CLOSE_CREATE_DIALOG
        });

    }

    validateTextArea() {

        // const {textarea} = this.refs;

    }

    generateStandardButton() {

        const {color, topicKey, feedbackKey, text} = this.props.createState;
        const {badge, name} = this.props.loginState;

        const onButtonClick = (e) => {

            this.props.dispatch({
                type: feedbackKey === null ? action.ADD_FEEDBACK : action.EDIT_FEEDBACK,
                data: {topicKey, feedbackKey, text, badge, name}
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

            this.props.dispatch({
                type: action.UPDATE_CREATE_TEXT,
                data: e.target.value
            });

        };

        return (
            <TextAreaContainer
                color={color}
                name="feedback"
                label="Enter your feedback"
                uniqueReference="Create--textArea"
                value={text}
                onTextChange={onTextChange}/>
        );

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
