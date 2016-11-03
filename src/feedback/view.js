import React, {Component, PropTypes} from 'react';
import MiniMenu from '../mini-menu/view';
import Icon from '../icon/view';

class Feedback extends Component {

    generateItem(item, key) {

        return (
            <li className="Feedback-item" key={key}>

                <div className="Feedback-badge">
                    <div className="Feedback-badgeIcon">
                        <Icon icon={{type: item.badge}}/>
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
                        <MiniMenu/>
                    </div>
                </div>

            </li>
        );

    }

    render() {

        const {items, color, key} = this.props.feedback;

        return (
            <ul className={`Feedback Feedback--${color}`}>
                {items.map(this.generateItem)}
            </ul>
        );

    }

}

export default Feedback;
