import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import Filter from './presentation';
import MiniMenuContainer from '../mini-menu/container';

class FilterContainer extends Component {

    generateMiniMenu(isOptionsActive) {

        const toggleisActive = (newActiveState) => this.props.dispatch({
            type: action.TOGGLE_FILTER_OPTIONS,
            data: newActiveState
        });

        const dispatchOptionClick = (selectedOption, filterAction) => {

            this.props.dispatch({
                type: action.UPDATE_FILTER_SELECTED_OPTION,
                data: selectedOption
            });

            this.props.dispatch({
                type: filterAction
            });

        }

        const options = [
            {
                heading: 'Recent',
                onOptionClick: () => dispatchOptionClick('Recent', action.xxxxxx)
            },
            {
                heading: 'Stars',
                onOptionClick: () => dispatchOptionClick('Stars', action.xxxxxx)
            },
            {
                heading: 'My posts',
                onOptionClick: () => dispatchOptionClick('My posts', action.xxxxxx)
            }
        ];

        return (
            <MiniMenuContainer
                color="gray"
                isOptionsActive={isOptionsActive}
                toggleisActive={toggleisActive}
                options={options}/>
        );

    }

    render() {

        const {isOptionsActive, selectedOption} = this.props.filterState;

        return (
            <Filter
                {...this.props}
                selectedOption={selectedOption}
                miniMenu={this.generateMiniMenu(isOptionsActive)}/>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FilterContainer);
