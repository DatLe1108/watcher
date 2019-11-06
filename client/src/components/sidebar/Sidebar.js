import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../login/Login';
import UserProfile from '../user/UserProfile';

import sidebarStyle from './sidebar.module.scss';

class Sidebar extends React.Component {

    render() {
        return (
           <>
                <div className={sidebarStyle.header}>
                    <i className={`film icon big ${sidebarStyle.logo}`}></i>
                    <Link to="/" className={sidebarStyle.appName}>Watcher</Link>
                </div>
                <div className={sidebarStyle.profile}>
                    <UserProfile/>
                </div>
                <div className={sidebarStyle.menu}>
                    <ul>
                        <li className={`${sidebarStyle.regular} ${sidebarStyle.active}`}> 
                            <i className="circle outline icon large"></i>
                            Feed
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="map outline icon large"></i>
                            Explore
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="bell outline icon large"></i>
                            Notification
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="envelope outline icon large"></i>
                            Messages
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="paper plane outline icon large"></i>
                            Direct
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="chart bar outline icon large"></i>
                            Stats
                        </li>
                        <li className={sidebarStyle.regular}>
                            <i className="sun outline icon large"></i>
                            Settings
                        </li>
                        <div className={sidebarStyle.coslapseButton}>
                            <i className="angle left icon"></i>
                            hiádasd
                        </div>
                    </ul>
                    <ul>
                        <li>
                            <i className="arrow alternate circle left outline icon large"></i>
                            Logout
                        </li>
                    </ul>
                </div>
           </>
        );
    }
}

export default Sidebar;