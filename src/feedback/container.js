import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU} from '../state/actions';
import Feedback from './presentation';
import MiniMenu from '../mini-menu/view';
import Icon from '../icon/view';

class FeedbackContainer extends Component {

    constructor() {

        super();
        this.generateFeedback = this.generateFeedback.bind(this);

    }

    miniMenuToggle(FeedbackKey) {

        const {topicKey} = this.props.feedback;

        // this.props.dispatch({
        //     type: TOGGLE_FEEDBACK_MINI_MENU,
        //     data: {
        //         topicKey,
        //         FeedbackKey
        //     }
        // });

    }

    miniMenuOptions() {

        return [
            {
                heading: 'Edit',
                onClick: () => console.log('Edit')
            },
            {
                heading: 'Remove',
                onClick: () => console.log('Remove')
            }
        ];

    }

    generateFeedback(feedback, key) {

        return (
            <Feedback key={key}/>
        );

    }

    render() {

        // const {items, color} = this.props.feedback;
        // <ul className={`Feedback Feedback--${color}`}>

        // console.log('FEEDBACK', this);

        return (
            <ul className="Container-feedback">
                {this.props.feedbackList.map(this.generateFeedback)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FeedbackContainer);
