import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import chronology from '../helpers/chronology';
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

        const {color, topicId, feedbackId, text} = this.props.createState;
        const {badge, name, userId} = this.props.thisUserState;

        const generateLastEdit = () => {

            const dateInstance = chronology.generateCurrentDateInstance();
            const day = chronology.generateThreeLetterDayCode(dateInstance);
            const month = chronology.generateThreeLetterMonthCode(dateInstance);
            const date = dateInstance.getDate();
            const time = chronology.generateTweleveHourTime(dateInstance);

            return `${day} - ${month} ${date} - ${time}`;

        };

        const generateFeedbackId = () => {

            return new Date().getTime();

        };

        const onButtonClick = (e) => {

            const isEditFeedback = feedbackId;

            if (isEditFeedback) {

                const lastEdit = generateLastEdit();

                this.props.dispatch({
                    type: action.EDIT_FEEDBACK,
                    data: {feedbackId, text, lastEdit}
                });

            } else {

                this.props.dispatch({
                    type: action.ADD_FEEDBACK,
                    data: {
                        feedbackId: generateFeedbackId(),
                        topicId,
                        text,
                        badge,
                        name,
                        userId
                    }
                });

            }

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

    generateHeading() {

        const {topicId} = this.props.createState;
        const topic = this.props.topicState.filter((item) => item.topicId === topicId);

        return topic.length ? topic[0].heading : 'Create';

    }

    render() {

        const {createState} = this.props;

        return (
            <ModalContainer
                heading={this.generateHeading()}
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
