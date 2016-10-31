import React, {Component, PropTypes} from 'react';

class Feedback extends Component {

    generateItem(item, key) {

        return (
            <li className="Feedback-item" key={key}>

                <div className="Feedback-icon">
                    {item.icon}
                </div>

                <div className="Feedback-content">
                    <span className="Feedback-name">{item.name}</span>
                    <span className="Feedback-text">{item.text}</span>
                </div>

                <div className="Feedback-options">
                    <span className="Feedback-star">{item.stars}</span>
                    <span className="Feedback-dropdown"></span>
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
