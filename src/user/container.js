import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import User from './presentation';
import LockupContainer from '../lockup/container';
import MiniMenuContainer from '../mini-menu/container';

class UserContainer extends Component {

    constructor() {

        super();
        this.generateUser = this.generateUser.bind(this);

    }

    generateMiniMenu() {

        const toggleisActive = (isOptionsActive) => this.props.dispatch({
            type: action.TOGGLE_THIS_USER_OPTIONS,
            data: isOptionsActive
        });

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => this.props.dispatch({
                    type: action.OPEN_LOGIN_DIALOG
                })
            }
        ];

        return (
            <MiniMenuContainer
                color="gray"
                isOptionsActive={this.props.thisUserState.isOptionsActive}
                toggleisActive={toggleisActive}
                options={options}/>
        );

    }

    generateLockup(item) {

        const onUserClick = () => {

            console.log(`highlight feedback from ${item.name}`);

        };

        return (
            <LockupContainer
                color="gray"
                icon={item.badge}
                name={item.name}
                wrapperTag="button"
                onLockupClick={onUserClick}/>
        );

    }

    generateUser(item, key) {

        const lockup = this.generateLockup(item);
        const miniMenu = item.thisUser ? this.generateMiniMenu() : false;

        return (
            <User
                key={key}
                isThisUser={item.thisUser}
                lockup={lockup}
                miniMenu={miniMenu}/>
        );

    }

    render() {

        const {thisUserState, otherUserState} = this.props;
        const allUsers = [{...thisUserState, thisUser: true}, ...otherUserState];

        return (
            <ul className="Container-user">
                {allUsers.map(this.generateUser)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(UserContainer);
