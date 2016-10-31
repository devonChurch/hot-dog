import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Shell from '../shell/view';
import Feedback from '../feedback/view';
import AddButton from '../add-button/view';
import {assignAddFeedbackKey} from '../app/view';

class Topics extends Component {

    constructor() {

        super();
        this.generateItem = this.generateItem.bind(this);

    }

    generateItem({heading, color}, key) {

        console.log('this', this);

        const items = this.props.topicsFeedback[key];
        const onClick = assignAddFeedbackKey(key);

        return (
            <article className="Topics-topic" key={key}>
                <Shell shell={{heading, color}}>
                    <AddButton addButton={{onClick}}/>
                    <Feedback feedback={{items, key}}/>
                </Shell>
            </article>
        );

    }

    render() {

        const {topics} = this.props;

        return (
            <section className="Topics">
                {topics.map(this.generateItem)}
            </section>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Topics); // Topics;
