import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import UserContainer from '../user/container';
import TopicContainer from '../topic/container';
import CreateContainer from '../create/container';
import FooterContainer from '../footer/container';

class AppContainer extends Component {

    render() {

        return (
            <div>
                <header>HEADER</header>
                <UserContainer/>
                <TopicContainer/>
                <FooterContainer/>
                <CreateContainer/>
            </div>
        );

    }

}

export default AppContainer;
