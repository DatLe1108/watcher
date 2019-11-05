import React from 'react';

import Login from './login/Login';

import style from '../styles/component/sidebar.module.scss';

class Sidebar extends React.Component {

    render() {
        return (
           <>
                <div className={style.header}>
                    header
                </div>
           </>
        );
    }
}

export default Sidebar;