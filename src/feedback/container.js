import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU, TOGGLE_FEEDBACK_RATING} from '../state/actions';
import Feedback from './presentation';
import BadgeContainer from '../badge/container';
import StarRatingContainer from '../star-rating/container';
import MiniMenuContainer from '../mini-menu/container';
import Icon from '../icon/view';

class FeedbackContainer extends Component {

    constructor() {

        super();
        this.generateFeedback = this.generateFeedback.bind(this);

    }

    generateBadge(feedback) {

        return (
            <BadgeContainer
                color={this.props.color}
                icon={feedback.badge}/>
        );

    }

    generateStarRating(feedback, key) {

        const onToggleClick = () => {

            this.props.dispatch({
                type: TOGGLE_FEEDBACK_RATING,
                data: {
                    topicKey: this.props.topicKey,
                    feedbackKey: key
                }
            });

        };

        return (
            <StarRatingContainer
                color={this.props.color}
                rating={feedback.rating}
                isRatingToggled={feedback.isRatingToggled}
                onToggleClick={onToggleClick}/>
        );

    }

    generateMiniMenu(feedback, key) {

        const onToggleClick = () => {

            this.props.dispatch({
                type: TOGGLE_FEEDBACK_MINI_MENU,
                data: {
                    topicKey: this.props.topicKey,
                    feedbackKey: key
                }
            });

        };

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => console.log('menu | edit', this.props.topicKey, key)
            },
            {
                heading: 'Remove',
                onOptionClick: () => console.log('menu | remove', this.props.topicKey, key)
            }
        ];

        return (
            <MiniMenuContainer
                color={this.props.color}
                isActive={feedback.isOptionsActive}
                onToggleClick={onToggleClick}
                options={options}/>
        );
    }

    generateFeedback(feedback, key) {

        return (
            <Feedback
                color={this.props.color}
                name={feedback.name}
                text={feedback.text}
                starRating={this.generateStarRating(feedback, key)}
                miniMenu={this.generateMiniMenu(feedback, key)}
                badge={this.generateBadge(feedback)}
                key={key}/>
        );

    }

    render() {

        return (
            <ul className="Container-feedback">
                {this.props.feedbackList.map(this.generateFeedback)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FeedbackContainer);
