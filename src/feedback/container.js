import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {OPEN_CREATE_DIALOG, TOGGLE_FEEDBACK_MINI_MENU, TOGGLE_FEEDBACK_RATING, REMOVE_FEEDBACK} from '../state/actions';
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

        const toggleFeedbackMiniMenu = (isOptionsActive) => {

            this.props.dispatch({
                type: TOGGLE_FEEDBACK_MINI_MENU,
                data: {
                    topicKey: this.props.topicKey,
                    feedbackKey: key,
                    isOptionsActive
                }
            });

        };

        const onToggleClick = () => {

            toggleFeedbackMiniMenu(!feedback.isOptionsActive);

        };

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => {

                    toggleFeedbackMiniMenu(false);
                    this.props.dispatch({
                        type: OPEN_CREATE_DIALOG,
                        data: {
                            isActive: true,
                            color: this.props.color,
                            topicKey: this.props.topicKey,
                            feedbackKey: key,
                            text: feedback.text
                        }
                    });

                }
            },
            {
                heading: 'Remove',
                onOptionClick: () => {

                    toggleFeedbackMiniMenu(false);
                    this.props.dispatch({
                        type: REMOVE_FEEDBACK,
                        data: {
                            topicKey: this.props.topicKey,
                            feedbackKey: key
                        }
                    });

                }
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
