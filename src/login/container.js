import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_LOGIN_DIALOG, SUBMIT_LOGIN_DIALOG, UPDATE_LOGIN_NAME, UPDATE_LOGIN_ICON} from '../state/actions';
import Login from './presentation';
import ModalContainer from '../modal/container';
import StandardButtonContainer from '../standard-button/container';
import TextInputContainer from '../text-input/container';

class LoginContainer extends Component {

    constructor() {

        super();
        this.generateTextInput = this.generateTextInput.bind(this);
        this.generateStandardButton = this.generateStandardButton.bind(this);
        this.generateBadgeOptions = this.generateBadgeOptions.bind(this);

    }

    // validateTextArea() {
    //
    //     // const {textarea} = this.refs;
    //
    // }

    generateStandardButton() {

        const onButtonClick = (e) => {

            this.props.dispatch({
                type: SUBMIT_LOGIN_DIALOG
            });

            this.props.dispatch({
                type: CLOSE_LOGIN_DIALOG
            });

            e.preventDefault();

        };

        return (
            <StandardButtonContainer
                color="gray"
                onButtonClick={onButtonClick}
                type="submit"
                text="Done"/>
        );

    }

    generateTextInput() {

        const onTextChange = (e) => this.props.dispatch({
            type: UPDATE_LOGIN_NAME,
            data: e.target.value
        });

        return (
            <TextInputContainer
                color="gray"
                name="feedback"
                label="Enter your feedback"
                uniqueReference="Login--textInput"
                value={this.props.loginState.name}
                onTextChange={onTextChange}/>
        );

    }

    generateBadgeOptions() {

        const badges = ['cake', 'car', 'dice', 'flower', 'heart', 'lightening', 'martini', 'music', 'smile', 'umbrella'];
        const addOptions = (badge) => {

            return {
                badge,
                checked: badge === this.props.loginState.badge, // (!i && !this.props.loginState.icon) || icon === this.props.loginState.icon,
                onBadgeChange: () => this.props.dispatch({
                    type: UPDATE_LOGIN_ICON,
                    data: badge
                })
            }

        };

        return badges.map(addOptions);

    }

    render() {

        return (
            <ModalContainer
                heading="Login"
                color="gray"
                isActive={this.props.loginState.isActive}>
                <Login
                    textInput={this.generateTextInput()}
                    badgeOptions={this.generateBadgeOptions()}
                    submitButton={this.generateStandardButton()}/>
            </ModalContainer>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(LoginContainer);
