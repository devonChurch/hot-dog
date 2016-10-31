import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Topics from '../topics/view';

class App extends Component {

    render() {

        const {topics} = this.props.app;

        return (
            <div>
                <header>HEADER</header>
                <div>LOGGED IN</div>
                {/*<section>SECTION</section>*/}
                <Topics topics={topics}/>
                <footer>FOOTER</footer>
            </div>
        );

    }

}

function assignAddFeedbackKey(key) {

    // console.log('this', this);

    const addFeedback = () => {

        console.log('clicked', key);
        console.log('this', App);

    }

    return addFeedback; // .bind(App);

}

export {assignAddFeedbackKey};
export default App;
