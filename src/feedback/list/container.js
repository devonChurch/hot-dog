import React, {Component, PropTypes} from 'react';
import FeedbackList from './presentation';
import FeedbackItemContainer from '../item/container';

class FeedbackListContainer extends Component {

    constructor() {

        super();
        // this.generateFeedback = this.generateFeedback.bind(this);

    }


    // generateBadge(feedback) {
    //
    //     return (
    //         <BadgeContainer
    //             color={this.props.color}
    //             icon={feedback.badge}/>
    //     );
    //
    // }

    // generateStarRating(feedback) {
    //
    //     const onToggleClick = () => {
    //
    //         const {userId} = this.props.thisUserState;
    //
    //         this.props.dispatch({
    //             type: action.TOGGLE_FEEDBACK_RATING,
    //             data: {
    //                 userId,
    //                 feedbackId: feedback.feedbackId
    //             }
    //         });
    //
    //     };
    //
    //     return (
    //         <StarRatingContainer
    //             color={this.props.color}
    //             rating={feedback.rating}
    //             onToggleClick={onToggleClick}/>
    //     );
    //
    // }

    // generateMiniMenu(feedback) {
    //
    //     const toggleisActive = (isOptionsActive) => this.props.dispatch({
    //         type: action.TOGGLE_FEEDBACK_OPTIONS,
    //         data: {
    //             feedbackId: feedback.feedbackId,
    //             isOptionsActive
    //         }
    //     });
    //
    //     const options = [
    //         {
    //             heading: 'Edit',
    //             onOptionClick: () => this.props.dispatch({
    //                 type: action.OPEN_CREATE_DIALOG,
    //                 data: {
    //                     isActive: true,
    //                     color: this.props.color,
    //                     feedbackId: feedback.feedbackId,
    //                     text: feedback.text
    //                 }
    //             })
    //         },
    //         {
    //             heading: 'Remove',
    //             onOptionClick: () => {
    //
    //                 this.props.dispatch({
    //                     type: action.HIDE_FEEDBACK,
    //                     data: {
    //                         feedbackId: feedback.feedbackId,
    //                     }
    //                 });
    //
    //                 setTimeout(() => {
    //
    //                     this.props.dispatch({
    //                         type: action.REMOVE_FEEDBACK,
    //                         data: {
    //                             feedbackId: feedback.feedbackId,
    //                         }
    //                     })
    //
    //                 }, speed(500));
    //
    //             }
    //         }
    //     ];
    //
    //     return (
    //         <MiniMenuContainer
    //             color={this.props.color}
    //             isOptionsActive={feedback.isOptionsActive}
    //             toggleisActive={toggleisActive}
    //             options={options}/>
    //     );
    //
    // }

    generateFeedback(feedback, key) {

        // const thisUser = this.props.thisUserState.userId === feedback.userId;
        // const starRating = thisUser ? false : this.generateStarRating(feedback);
        // const miniMenu = thisUser ? this.generateMiniMenu(feedback) : false;

        return (
            <FeedbackItemContainer {...feedback} key={key}/>
        );

    }

    render() {

        const {feedbackList} = this.props;

        return (
            <FeedbackList totalFeedbackItems={feedbackList.length}>
                {feedbackList.map(this.generateFeedback)}
            </FeedbackList>
        );

    }

}

export default FeedbackListContainer;
