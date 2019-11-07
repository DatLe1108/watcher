import React from 'react';

const UserAvatar = (props) => {

    if (props.addNew) {
        return(
            <div className="user-avatar add-new">
                <div className="decorator"></div>
                <div className="add-new">
                    <i class="plus icon"></i>
                </div>
                <img src={props.imageUrl}></img>
            </div>
        );
    }

    return(
        <div className="user-avatar">
            <div className="decorator"></div>
            <img src={props.imageUrl}></img>
        </div>
    );
};

export default UserAvatar;

    