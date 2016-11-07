import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TopicContainer from '../topic/container';
import Create from '../create/view';

class AppContainer extends Component {

    render() {

        return (
            <div>
                <header>HEADER</header>
                <div>LOGGED IN</div>
                {/*<section>SECTION</section>*/}
                <TopicContainer/>
                {/*<Topics topics={topics}/>*/}
                <footer>FOOTER</footer>
                <Create/>
            </div>
        );

    }

}

export default AppContainer;
