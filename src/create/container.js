import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import chronology from '../helpers/chronology';
import Create from './presentation';
import ModalContainer from '../modal/container';
import StandardButtonContainer from '../standard-button/container';
import TextAreaContainer from '../text-area/container';

console.log('chronology', chronology);

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

        const generateLastEdit = () => {

            const dateInstance = chronology.generateCurrentDateInstance();
            const day = chronology.generateThreeLetterDayCode(dateInstance);
            const month = chronology.generateThreeLetterMonthCode(dateInstance);
            const date = dateInstance.getDate();
            const time = chronology.generateTweleveHourTime(dateInstance);

            return `${day} - ${month} ${date} - ${time}`;

        };

        const onButtonClick = (e) => {

            const isAddFeedback = feedbackKey === null;

            if (isAddFeedback) {

                this.props.dispatch({
                    type: action.ADD_FEEDBACK,
                    data: {topicKey, text, badge, name}
                });

            } else {

                const lastEdit = generateLastEdit();

                this.props.dispatch({
                    type: action.EDIT_FEEDBACK,
                    data: {topicKey, feedbackKey, text, lastEdit}
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
