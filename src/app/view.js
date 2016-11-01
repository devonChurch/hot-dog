import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Topics from '../topics/view';
import Create from '../create/view';

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
                <Create/>
            </div>
        );

    }

}

export default App;
