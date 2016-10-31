import React, {Component, PropTypes} from 'react';

class Shell extends Component {

    render() {

        const {children, shell: {heading, color}} = this.props;

        return (
            <div className={`Shell Shell--${color}`}>

                <header className="Shell-header">
                    <h2 className="Shell-heading">{heading}</h2>
                </header>

                {children}

            </div>
        );

    }

}

export default Shell;
