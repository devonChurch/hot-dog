import React, {Component, PropTypes} from 'react';
// import Shell from '../shell/presentation';
// import Feedback from '../feedback/view';
// import AddButton from '../add-button/view';

const Topic = (props) => {

    // <Shell shell={{heading, color}}>

    console.log('Topic props', props);

    return (
        <article className="Topic-topic">
            {props.children}
            {/*<Shell heading={props.heading}>
                {props.children}
                {<AddButton addButton={{
                    onClick,
                    color
                }}/>
                <Feedback feedback={{
                    items,
                    color,
                    topicKey: key
                }}/>}
            </Shell>*/}
        </article>
    );

};

// class Topic extends Component {
//
//     render() {
//
//
//
//     }
//
// }

export default Topic;
