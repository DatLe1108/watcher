import React from 'react';

import Login from './login/Login';

class Header extends React.Component {

    render() {
        return (
            <div className="ui secondary pointing menu">
                <div className="right menu">
                    <Login />
                </div>
            </div>
        );
    }
}

export default Header;

