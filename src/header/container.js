import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import action from '../state/action';
import Header from './presentation';
import StandardButtonContainer from '../standard-button/container';
import FilterContainer from '../filter/container';

class HeaderContainer extends Component {

    generateStatisticsButton() {

        const onButtonClick = () => console.log('statictics click');

        return (
            <StandardButtonContainer
                color="gray"
                tint="dark"
                onButtonClick={onButtonClick}
                type="button"
                text="Statistics"/>
        );

    }

    generateFilter() {

        return <FilterContainer/>;

    }

    render() {

        return (
            <Header
                statisticsButton={this.generateStatisticsButton()}
                filter={this.generateFilter()}/>
        );

    }

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(HeaderContainer);
