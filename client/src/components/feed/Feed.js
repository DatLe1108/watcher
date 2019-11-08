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
                    <div className={feedStyle.feed}>
                        <FeedCard name="Luci.Hunt" like="732" liked comment="11" commented imageUrl="http://www.candyboximages.com/wp/wp-content/uploads/021_036_130609.jpg"/>
                    </div>
                    <div className={feedStyle.feed, feedStyle.even}>
                        <FeedCard even name="Barbara.Moore" like="38" comment="23" commented imageUrl="http://konstantakislaw.com/wp-content/uploads/2015/04/real-estate-attorney.jpg"/>
                    </div>
                    <div className={feedStyle.feed}>
                        <FeedCard name="Kusa.08" like="543" comment="3" liked imageUrl="https://image.winudf.com/v2/image/Y29tLkNoaWVmV2FsbHBhcGVycy5TdW5zZXQyM19zY3JlZW5zaG90c18wX2U0NjE2NmJh/screen-0.jpg?fakeurl=1&type=.jpg"/>
                    </div>
                    <div className={feedStyle.feed, feedStyle.even}>
                        <FeedCard even name="Legend.11" like="3.2k" comment="122" imageUrl="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=architecture-chimney-clouds-731082.jpg&fm=jpg"/>
                    </div>
                    <div className={feedStyle.feed}>
                        <FeedCard name="Mark.Refel" like="21" comment="33" liked imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-new-years-banner-with-fireworks-and-royalty-free-image-609942456-1562160429.jpg"/>
                    </div>
                    <div className={feedStyle.feed, feedStyle.even}>
                        <FeedCard even name="Suzy.44" like="33k" comment="1222" commented imageUrl="http://free-hd-wall-papers.com/images/fashion-wallpapers/fashion-wallpapers-3.jpg"/>
                    </div>
                    <div className={feedStyle.feed}>
                        <FeedCard name="Mr.Bean" like="21" comment="33" imageUrl="https://www.ahstatic.com/photos/5555_rsr001_01_p_1024x768.jpg"/>
                    </div>
                    <div className={feedStyle.feed, feedStyle.even}>
                        <FeedCard even name="Legend.11" like="3.2k" comment="122" commented imageUrl="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00089970_icgvox.jpg"/>
                    </div>
                    <div className={feedStyle.feed}>
                        <FeedCard name="Mark.Refel" like="21" comment="33" imageUrl="https://znews-photo.zadn.vn/w1024/Uploaded/jaroin/2018_06_11/23735415_2004162813206825_8826216715936333824_n_1.jpg"/>
                    </div>
                    <div className={feedStyle.feed, feedStyle.even}>
                        <FeedCard even name="Legend.11" like="3.2k" comment="122" imageUrl="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?cs=srgb&dl=architecture-chimney-clouds-731082.jpg&fm=jpg"/>
                    </div>
                    <div className={feedStyle.feed}>
                        <FeedCard name="Mark.Refel" like="21" comment="33" imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-new-years-banner-with-fireworks-and-royalty-free-image-609942456-1562160429.jpg"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Feed;