import React from 'react';

import FeedCard from '../sharedComponent/FeedCard';

import feedStyle from './feed.module.scss';

class Feed extends React.Component {

    render() {
        return (
            <div className={feedStyle.feedHolder}>
                <div className={feedStyle.actionHolder}>
                    <div className={feedStyle.title}>Feed</div>
                    <div className={feedStyle.action}>
                        <div className={feedStyle.latest}>Latest</div>
                        <div className={feedStyle.popular}>Popular</div>
                    </div>
                </div>
                <div className={feedStyle.feeds}>
                    <FeedCard/>
                </div>
            </div>
        );
    }

}

export default Feed;