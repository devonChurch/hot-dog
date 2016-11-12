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

    generateFeatureButton(color, key) {

        const onFeatureClick = () => {

            this.props.dispatch({
                type: OPEN_CREATE_DIALOG,
                data: {
					isActive: true,
					color,
					topicKey: key,
					feedbackKey: null,
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

    generateFeedback(color, key) {

        return (
            <FeedbackContainer
                feedbackList={this.props.feedbackState[key]}
                topicKey={key}
                color={color}/>
        );

    }

    generateTopic(topic, key) {

        return (
            <Topic key={key}>
                <Shell
                    heading={topic.heading}
                    color={topic.color}>
                    {this.generateFeatureButton(topic.color, key)}
                    {this.generateFeedback(topic.color, key)}
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
