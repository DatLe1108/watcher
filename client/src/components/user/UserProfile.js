import React from 'react';

import profileStyle from './profile.module.scss';

class UserProfile extends React.Component {

    render() {
        return (
            <>
                <div className={profileStyle.holder}>
                    <div className={profileStyle.image}></div>
                </div>
                <div className={profileStyle.name}>
                    <div className={profileStyle.fullName}>Keyly Clarson</div>
                    <div className={profileStyle.id}>@keyly247</div>
                </div>
                <div className={profileStyle.statistic}>

                    <div className={profileStyle.wrapper}>
                        <div className={profileStyle.number}>46</div>
                        <div className={profileStyle.title}>Posts</div>
                    </div>

                    <div className={profileStyle.wrapper}>
                        <div className={profileStyle.number}>2.8k</div>
                        <div className={profileStyle.title}>Followers</div>
                    </div>

                    <div className={profileStyle.wrapper}>
                        <div className={profileStyle.number}>526</div>
                        <div className={profileStyle.title}>Following</div>
                    </div>

                </div>
            </>
        );
    }
}

export default UserProfile;