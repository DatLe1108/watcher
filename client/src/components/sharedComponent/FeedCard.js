import React from 'react';

import UserAvatar from './UserAvatar';

const FeedCard = (props) => {
    return (
        <div className="card-holder">
            <div className="card-image-holder">
                <img src="https://i.ytimg.com/vi/jFPBLyUEZUk/maxresdefault.jpg"/>
            </div>
            <div className="info-holder">
                <div className="user-info">
                    <div className="user-image"></div>
                    Suliana.Ken
                </div>
                <div className="like">
                    <i class="heart outline icon"></i>
                    112
                </div>
                <div className="comment">
                    <i class="comment outline icon"></i>
                    30
                </div>
            </div>
        </div>
    );
};

export default FeedCard;