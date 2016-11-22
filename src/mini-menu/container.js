import React, {Component, PropTypes} from 'react';
import MiniMenu from './presentation';

class MiniMenuContainer extends Component {

    render() {

        console.log(MiniMenuContainer, this);

        const toggleMiniMenuOpen = (isActive) => {

            return (e) => {

                console.log('toggleMiniMenuOpen', this.props.toggleisActive, isActive);

                this.props.toggleisActive(isActive);
                e.preventDefault();

            };

        };

        return (
            <MiniMenu
                {...this.props}
                onMiniMenuFocus={toggleMiniMenuOpen(true)}
                onMiniMenuBlur={toggleMiniMenuOpen(false)}/>
        );

    }

}

export default MiniMenuContainer;
