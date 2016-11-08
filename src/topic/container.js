import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {OPEN_CREATE_DIALOG} from '../state/actions';
import Topic from './presentation';
import Shell from '../shell/container';
import FeatureButton from '../feature-button/container';
import FeedbackContainer from '../feedback/container';

class TopicContainer extends Component {

    constructor() {

        super();
        this.generateTopic = this.generateTopic.bind(this);

    }

    startAddFeedbackSequence(data) {

        this.props.dispatch({
            type: OPEN_CREATE_DIALOG,
            data
        });

    }

    generateTopic(topic, key) {

        return (
            <Topic key={key}>
                <Shell
                    heading={topic.heading}
                    color={topic.color}>
                    <FeatureButton
                        onFeatureClick= {() => console.log('Add button')}
                        color={topic.color}/>
                    <FeedbackContainer
                        feedbackList={this.props.feedbackState[key]}
                        topicKey={key}
                        color={topic.color}/>
                </Shell>
            </Topic>
        );

    }

    render() {

        return (
            <section className="Container-topic">
                {this.props.topicState.map(this.generateTopic)}
            </section>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(TopicContainer);
