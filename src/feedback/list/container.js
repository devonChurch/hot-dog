import React, {Component, PropTypes} from 'react';
import FeedbackList from './presentation';
import FeedbackItemContainer from '../item/container';

class FeedbackListContainer extends Component {

    generateFeedback(feedback, key) {

        return (
            <FeedbackItemContainer
                {...feedback}
                key={key}/>
        );

    }

    render() {

        const {feedbackList} = this.props;

        return (
            <FeedbackList {...this.props}>
                {feedbackList.map(this.generateFeedback)}
            </FeedbackList>
        );

    }

}

export default FeedbackListContainer;
