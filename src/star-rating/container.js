import React, {Component, PropTypes} from 'react';
import StarRating from './presentation';

class StarRatingContainer extends Component {

    render() {

        return (
            <StarRating {...this.props}/>
        );

    }

}

export default StarRatingContainer;
