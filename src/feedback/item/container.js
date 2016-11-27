import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../../state/action';
import {speed} from '../../helpers/all';
import FeedbackItem from './presentation';
import BadgeContainer from '../../badge/container';
import StarRatingContainer from '../../star-rating/container';
import MiniMenuContainer from '../../mini-menu/container';

class FeedbackItemContainer extends Component {

    constructor() {

        super();

    }

    componentDidMount() {

        // this.props.dispatch({
        //     type: action.TOGGLE_FEEDBACK_VISIBILITY,
        //     data: {
        //         // WE NEED TO REFERENCE A SINGLE ID HERE!
        //         topicKey: this.props.topicKey,
        //         feedbackKey: key
        //     }
        // });

    }

    generateBadge() {

        const {color, badge} = this.props;

        return (
            <BadgeContainer
                color={color}
                icon={badge}/>
        );

    }

    generateStarRating() {

        const {feedbackId, rating, color, thisUserState: {userId}} = this.props;

        const onToggleClick = () => {

            this.props.dispatch({
                type: action.TOGGLE_FEEDBACK_RATING,
                data: {userId, feedbackId}
            });

        };

        return (
            <StarRatingContainer
                color={color}
                rating={rating}
                onToggleClick={onToggleClick}/>
        );

    }

    generateMiniMenu() {

        const {feedbackId, text, color, isOptionsActive} = this.props;

        const toggleisActive = (newActiveState) => this.props.dispatch({
            type: action.TOGGLE_FEEDBACK_OPTIONS,
            data: {
                feedbackId,
                isOptionsActive: newActiveState
            }
        });

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => this.props.dispatch({
                    type: action.OPEN_CREATE_DIALOG,
                    data: {
                        isActive: true,
                        color,
                        feedbackId,
                        text
                    }
                })
            },
            {
                heading: 'Remove',
                onOptionClick: () => {

                    this.props.dispatch({
                        type: action.HIDE_FEEDBACK,
                        data: {feedbackId}
                    });

                    setTimeout(() => {

                        this.props.dispatch({
                            type: action.REMOVE_FEEDBACK,
                            data: {feedbackId}
                        })

                    }, speed(500));

                }
            }
        ];

        return (
            <MiniMenuContainer
                color={color}
                isOptionsActive={isOptionsActive}
                toggleisActive={toggleisActive}
                options={options}/>
        );

    }

    render() {

        const {props, props: {thisUserState}} = this;
        const thisUser = thisUserState.userId === props.userId;
        const starRating = thisUser ? false : this.generateStarRating();
        const miniMenu = thisUser ? this.generateMiniMenu() : false;

        return (
            <FeedbackItem
                color={props.color}
                name={props.name}
                text={props.text}
                lastEdit={props.lastEdit}
                isFeedbackHidden={props.isFeedbackHidden}
                starRating={starRating}
                miniMenu={miniMenu}
                badge={this.generateBadge(props)}/>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FeedbackItemContainer);
