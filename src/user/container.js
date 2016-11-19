import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import User from './presentation';
import LockupContainer from '../lockup/container';
import MiniMenuContainer from '../mini-menu/container';

class UserContainer extends Component {

    constructor() {

        super();
        this.generateUser = this.generateUser.bind(this);

    }

    generateMiniMenu() {

        const onToggleClick = () => {

            console.log('toggle user open state');

        };

        const options = [
            {
                heading: 'Edit',
                onOptionClick: () => {

                    console.log('edit user');

                    // toggleFeedbackMiniMenu(false);
                    // this.props.dispatch({
                    //     type: action.OPEN_CREATE_DIALOG,
                    //     data: {
                    //         isActive: true,
                    //         color: this.props.color,
                    //         topicKey: this.props.topicKey,
                    //         feedbackKey: key,
                    //         text: feedback.text
                    //     }
                    // });

                }
            }
        ];

        return (
            <MiniMenuContainer
                color="gray"
                isActive={true}
                onToggleClick={onToggleClick}
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
        const miniMenu = !key ? this.generateMiniMenu() : false;

        // const props



        return (
            <User
                key={key}
                lockup={lockup}
                miniMenu={miniMenu}/>
        );

    }

    render() {

        const {loginState, collaboratorState} = this.props;
        const allUsers = loginState.name ? [loginState, ...collaboratorState] : collaboratorState;

        return (
            <ul className="Container-user">
                {allUsers.map(this.generateUser)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(UserContainer);
