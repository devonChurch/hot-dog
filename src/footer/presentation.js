import React, {Component, PropTypes} from 'react';
import LockupContainer from '../lockup/container';

const Footer = (props) => {

    return (
        <footer className="Footer">
            <ul className="Footer-links">
                <li className="Footer-link">
                    <LockupContainer
                        color="gray"
                        icon="github"
                        name="Github"
                        href="https://github.com/devonChurch/hot-dog"
                        wrapperTag="a"/>
                </li>
            </ul>
        </footer>
    );

};

export default Footer;
