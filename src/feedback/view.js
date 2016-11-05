import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {TOGGLE_FEEDBACK_MINI_MENU} from '../state/actions';
import MiniMenu from '../mini-menu/view';
import Icon from '../icon/view';

class Feedback extends Component {

    constructor() {

        super();
        this.generateItem = this.generateItem.bind(this);

    }

    miniMenuToggle(FeedbackKey) {

        const {topicKey} = this.props.feedback;

        this.props.dispatch({
            type: TOGGLE_FEEDBACK_MINI_MENU,
            data: {
                topicKey,
                FeedbackKey
            }
        });

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

    generateItem(item, key) {

        const {color} = this.props.feedback;

        return (
            <li className="Feedback-item" key={key}>

                <div className="Feedback-badge">
                    <div className="Feedback-badgeIcon">
                        <Icon icon={{
                            type: item.badge
                        }}/>
                    </div>
                </div>

                <div className="Feedback-content">
                    <span className="Feedback-name">{item.name}</span>
                    <span className="Feedback-text">{item.text}</span>
                </div>

                <div className="Feedback-options">
                    <div className="Feedback-star">
                        <div className="Feedback-starIcon">
                            <Icon icon={{type: 'star'}}/>
                        </div>
                        <div className="Feedback-starTally">{item.stars}</div>
                    </div>
                    <div className="Feedback-miniMenu">
                        <MiniMenu miniMenu={{
                            color,
                            onToggle: this.miniMenuToggle(key),
                            options: this.miniMenuOptions(key),
                            isActive: item.isOptionsActive
                        }}/>
                    </div>
                </div>

            </li>
        );

    }

    render() {

        const {items, color} = this.props.feedback;

        return (
            <ul className={`Feedback Feedback--${color}`}>
                {items.map(this.generateItem)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Feedback);
