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

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => {

                    this.props.dispatch({
                        type: action.OPEN_LOGIN_DIALOG
                    });

                }
            }
        ];

        return (
            <MiniMenuContainer
                color="gray"
                isActive={true}
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

        const {loginState, collaboratorState} = this.props;
        const allUsers = loginState.name ? [{...loginState, thisUser: true}, ...collaboratorState] : collaboratorState;

        return (
            <ul className="Container-user">
                {allUsers.map(this.generateUser)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(UserContainer);
