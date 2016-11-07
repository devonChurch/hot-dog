import React, {Component, PropTypes} from 'react';
import MiniMenu from './presentation';
import Icon from '../icon/view';

class MiniMenuContainer extends Component {

    // generateOption(option, key) {
    //
    //     return (
    //         <li className="MiniMenu-option"
    //             key={key}>
    //             <button
    //                 className="MiniMenu-optionButton"
    //                 onClick={option.onClick}>
    //                 {option.heading}
    //             </button>
    //             </li>
    //     );
    //
    // }

    render() {

        // console.log('MiniMenuContainer', this);
        // console.log('this', this);
        // <MiniMenuContainer {...this.props}/>

        return (
            <MiniMenu {...this.props}/>
        );

        // const {color, options, isActive = false} = this.props.miniMenu;
        //
        // return (
        //     <div className={`MiniMenu MiniMenu--${color} ${isActive && 'isActive'}`}>
        //         <button
        //             className="MiniMenu-toggle"
        //             onClick={() => {}}>
        //             <span className="MiniMenu-icon">
        //                 <Icon icon={{type: 'menuVertical'}}/>
        //             </span>
        //         </button>
        //         <ul className="MiniMenu-options">
        //             {options.map(this.generateOption)}
        //         </ul>
        //     </div>
        // );

    }

}

export default MiniMenuContainer;
