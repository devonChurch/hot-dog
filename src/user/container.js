import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import User from './presentation';
import LockupContainer from '../lockup/container';

class UserContainer extends Component {

    generateUser(item, key) {

        const onUserClick = () => {

            console.log(`highlight feedback from ${item.name}`);

        };

        const lockup = (
            <LockupContainer
                color="gray"
                icon={item.badge}
                name={item.name}
                wrapperTag="button"
                onLockupClick={onUserClick}/>
        );

        return (
            <User
                key={key}
                lockup={lockup}/>
        );

    }

    render() {

        return (
            <ul className="Container-user">
                {this.props.userState.map(this.generateUser)}
            </ul>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(UserContainer);
