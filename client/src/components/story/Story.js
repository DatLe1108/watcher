import React from 'react';

import UserAvatar from '../sharedComponent/UserAvatar';

import storyStyle from './story.module.scss';

class Story extends React.Component {

    render() {
        return (
            <div className={storyStyle.storyHolder}>
                <div className={storyStyle.actionHolder}>
                    <div className={storyStyle.title}>Stories</div>
                    <div className={storyStyle.action}>
                        <i className="play circle outline icon big"></i>
                        Watch all
                    </div>
                </div>
                <div className={storyStyle.stories}>
                    <div className={storyStyle.story}>
                        <UserAvatar addNew imageUrl="https://www.midlandsderm.com/wp-content/uploads/2019/04/Rachel-R.-Person-760x760.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://timedotcom.files.wordpress.com/2017/12/susan-fowler-person-of-year-2017-time-magazine-2.jpg?quality=10"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://www.10tipsforhealth.com/wp-content/uploads/2013/04/Running-Woman-in-Park-e1516200127218.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://amp.businessinsider.com/images/5d4ae5ea100a2411da63051d-750-562.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://i.ytimg.com/vi/7I8OeQs7cQA/maxresdefault.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://www.gonzaga.edu/-/media/Website/Images/People-Detail/Faculty/School-of-Education/fd-melanie-person.ashx?h=415&w=415&la=en&hash=C86C4E29E2651B3E75338AC3F00C670242018E71"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRyStyeDYSQITQxWZ90dWV7vxURGMQlPkgUsdPgJrut4jepOorA&s"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2017/04/gretchen_carlson.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQat0l1Qf1Mftm3-GFsB8P93jcwNvw-jkNFPfIXIzMYZO3HWtpZqg&s"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-e36GdQQw4IrAbp3dfJVu30ZQwc3BsZgilTExeFVPZNYSEj8N&s"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://media3.s-nbcnews.com/i/newscms/2018_14/2387356/ezra-kaplan_704fbc3c90bd325e4a5c9c3de0808ab6.jpg"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBrlOfx62fIjTVDK--RsG5g7t1JaOI2VcCNdi6CmKVZPln8yH&s"/>
                    </div>
                    <div className={storyStyle.story}>
                        <UserAvatar imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUi0x0R3DSoeHG1f2OGLn88xaqM7dAZXxj0d3g9bIDwY9gGqxd&s"/>
                    </div>
                </div>   
            </div>
        );
    }

}

export default Story;