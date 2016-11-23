import React, {Component, PropTypes} from 'react';
import MiniMenu from './presentation';

class MiniMenuContainer extends Component {

    render() {

        const toggleMiniMenuOpen = (isActive) => {

            return (e) => {

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
