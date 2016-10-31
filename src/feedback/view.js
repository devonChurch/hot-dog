import React, {Component, PropTypes} from 'react';

class Feedback extends Component {

    generateItem(item, key) {

        return (
            <li className="Feedback-item" key={key}>
                icon: {item.icon}
                name: {item.name}
                stars: {item.stars}
                text: {item.text}
            </li>
        );

    }

    render() {

        const {items, key} = this.props.feedback;

        return (
            <ul className="Feedback">
                {items.map(this.generateItem)}
            </ul>
        );

    }

}

export default Feedback;
