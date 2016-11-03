import React, {Component, PropTypes} from 'react';
import Icon from '../icon/view';

class MiniMenu extends Component {

    render() {

        return (
            <div className={`MiniMenu MiniMenu--${'color'}`}>
                <button
                    className="MiniMenu-toggle"
                    onClick={() => {}}>
                    <span className="MiniMenu-icon">
                        <Icon icon={{type: 'menuVertical'}}/>
                    </span>
                </button>
            </div>
        );

    }

}

export default MiniMenu;
