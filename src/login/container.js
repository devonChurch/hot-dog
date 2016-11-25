import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import Login from './presentation';
import ModalContainer from '../modal/container';
import StandardButtonContainer from '../standard-button/container';
import TextInputContainer from '../text-input/container';

class LoginContainer extends Component {

    constructor() {

        super();
        this.onClickOffComponent = this.onClickOffComponent.bind(this);
        this.generateTextInput = this.generateTextInput.bind(this);
        this.generateStandardButton = this.generateStandardButton.bind(this);
        this.generateBadgeOptions = this.generateBadgeOptions.bind(this);

    }

    componentDidMount() {

        // Check local storange before assigning a new ID
        // - Also look for name and badge state

        const name = 'Anonymous';
        const badge = 'cake';
        const userId = new Date().getTime();

        this.props.dispatch({
            type: action.UPDATE_THIS_USER_DETAILS,
            data: {badge, name, userId}
        });

    }

    onClickOffComponent() {

        return !this.props.loginState.isInitialised ? false : this.props.dispatch({
            type: action.CLOSE_LOGIN_DIALOG
        });

    }

    // validateTextArea() {
    //
    //     // const {textarea} = this.refs;
    //
    // }

    generateStandardButton() {

        const onButtonClick = (e) => {

            const {badge, name, userId} = this.props.loginState;

            this.props.dispatch({
                type: action.SUBMIT_LOGIN_DIALOG
            });

            this.props.dispatch({
                type: action.UPDATE_THIS_USER_DETAILS,
                data: {badge, name, userId}
            });

            this.props.dispatch({
                type: action.UPDATE_THIS_USER_FEEDBACK,
                data: {badge, name, userId}
            });

            this.props.dispatch({
                type: action.CLOSE_LOGIN_DIALOG
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
            type: action.UPDATE_LOGIN_NAME,
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
                    type: action.UPDATE_LOGIN_ICON,
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
                isActive={this.props.loginState.isActive}
                onClickOffComponent={this.onClickOffComponent}>
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
