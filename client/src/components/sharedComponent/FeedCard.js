import React from 'react';

import UserAvatar from './UserAvatar';

const FeedCard = (props) => {

    const isRenderSmallSize = props.even ? 'even' : '';
    const isLiked = props.liked ? 'liked' : '';
    const isCommented = props.commented ? 'commented' : '';

    return (
        <div className={`card-holder ${isRenderSmallSize}`}>
            <div className={`card-image-holder ${isRenderSmallSize}`}>
                <img src={props.imageUrl}/>
            </div>
            <div className={`info-holder ${isRenderSmallSize}`}>
                <div className="user-info">
                    <div className="user-image"></div>
                    {props.name}
                </div>
                <div className={`like ${isLiked}`}>
                    <i class={`heart icon ${isLiked ? '' : 'outline'}`}></i>
                    {props.like}
                </div>
                <div className="comment">
                    <i class={`comment icon ${isCommented ? '' : 'outline'}`}></i>
                    {props.comment}
                </div>
            </div>
        </div>
    );
};

export default FeedCard;