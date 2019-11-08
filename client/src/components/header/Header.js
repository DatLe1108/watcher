import React from 'react';
import { Link } from 'react-router-dom';

import headerStyle from './header.module.scss';

class Header extends React.Component {

    render() {
        return (
            <div className={headerStyle.header}>
                <div className={headerStyle.searchBar}>
                    <i className="search icon"></i>
                    <input placeholder="Search"/>
                </div>
                <div className={headerStyle.ctaButton}>
                    <i className="bell outline icon"></i>
                </div>
                <div className={headerStyle.ctaButton}>
                    <i className="envelope outline icon"></i>
                </div>
                <div className={headerStyle.ctaButton}>
                    <Link to="/" className={headerStyle.addStreamButton}>
                        <i className="plus icon"></i>
                        Add new Stream
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;

