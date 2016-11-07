import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU} from '../state/actions';
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

        return (
            <StarRatingContainer
                color={this.props.color}
                rating={feedback.rating}
                onToggleClick={() => {
                    console.log('star rating', key);
                }}/>
        );

    }

    generateMiniMenu(feedback, key) {

        return (
            <MiniMenuContainer
                color={this.props.color}
                isActive={feedback.isOptionsActive}
                onToggleClick={() => {
                    console.log('menu | toggle', key)
                }}
                options={[
                    {
                        heading: 'Edit',
                        onOptionClick: () => console.log('menu | edit', key)
                    },
                    {
                        heading: 'Remove',
                        onOptionClick: () => console.log('menu | remove', key)
                    }
                ]}/>
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
                key={key}>

            </Feedback>
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
