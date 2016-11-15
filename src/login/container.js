import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {CLOSE_LOGIN_DIALOG, SUBMIT_LOGIN_DIALOG, UPDATE_LOGIN_TEXT, UPDATE_LOGIN_ICON} from '../state/actions';
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

        const onTextChange = (e) => {

            console.log('onTextChange');

            this.props.dispatch({
                type: UPDATE_LOGIN_TEXT,
                data: e.target.value
            });

        };

        return (
            <TextInputContainer
                color="gray"
                name="feedback"
                label="Enter your feedback"
                uniqueReference="Login--textInput"
                value={this.props.loginState.text}
                onTextChange={onTextChange}/>
        );

    }

    generateBadgeOptions() {

        const icons = ['cake', 'car', 'dice', 'flower', 'heart', 'lightening', 'martini', 'music', 'smile', 'umbrella'];
        const addOptions = (icon, i) => {

            // console.log(`[${this.props.loginState.icon}]   >>>   (!i && !icon) || icon === this.props.loginState.icon   >>>   (${!i} && ${!this.props.loginState.icon}) || ${icon} === ${this.props.loginState.icon}`);

            return {
                icon,
                checked: (!i && !this.props.loginState.icon) || icon === this.props.loginState.icon,
                onBadgeClick: () => this.props.dispatch({
                    type: UPDATE_LOGIN_ICON,
                    data: icon
                })
            }

        };

        return icons.map(addOptions);

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
