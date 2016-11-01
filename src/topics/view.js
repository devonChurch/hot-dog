import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {OPEN_CREATE_DIALOG} from '../state/actions';
import Shell from '../shell/view';
import Feedback from '../feedback/view';
import AddButton from '../add-button/view';

class Topics extends Component {

    constructor() {

        super();
        this.generateItem = this.generateItem.bind(this);

    }

    startAddFeedbackSequence(data) {

        this.props.dispatch({
            type: OPEN_CREATE_DIALOG,
            data
        });

    }

    generateItem({heading, color}, key) {

        const items = this.props.topicsState[key];
        const onClick = () => this.startAddFeedbackSequence({key, color});

        return (
            <article className="Topics-topic" key={key}>
                <Shell shell={{heading, color}}>
                    <AddButton addButton={{onClick, color}}/>
                    <Feedback feedback={{items, color, key}}/>
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
export default connect(mapStateToProps)(Topics);
