import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import Topic from './presentation';
import Shell from '../shell/container';
import FeatureButton from '../feature-button/container';
import FeedbackListContainer from '../feedback/list/container';

class TopicContainer extends Component {

    constructor() {

        super();
        this.generateTopic = this.generateTopic.bind(this);

    }

    generateFeatureButton(color, topicId) {

        const onFeatureClick = () => {

            this.props.dispatch({
                type: action.OPEN_CREATE_DIALOG,
                data: {
					isActive: true,
					color,
					topicId,
                    text: ''
				}
            });

        };

        return (
            <FeatureButton
                onFeatureClick= {onFeatureClick}
                color={color}/>
        );

    }

    generateFeedback(color, topicId) {

        const feedbackList = this.props.feedbackState.filter((item) => item.topicId === topicId);

        return (
            <FeedbackListContainer
                color={color}
                feedbackList={feedbackList}/>
        );

    }

    generateTopic(topic, key) {

        return (
            <Topic key={key}>
                <Shell
                    heading={topic.heading}
                    color={topic.color}>
                    {this.generateFeatureButton(topic.color, topic.topicId)}
                    {this.generateFeedback(topic.color, topic.topicId)}
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
