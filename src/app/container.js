import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderContainer from '../header/container';
import UserContainer from '../user/container';
import TopicContainer from '../topic/container';
import CreateContainer from '../create/container';
import LoginContainer from '../login/container';
import FooterContainer from '../footer/container';

class AppContainer extends Component {

    render() {

        return (
            <div>
                <HeaderContainer/>
                <div className="App-restrictContentWidth">
                    <UserContainer/>
                    <TopicContainer/>
                    <FooterContainer/>
                </div>
                <CreateContainer/>
                <LoginContainer/>
            </div>
        );

    }

}

export default AppContainer;
