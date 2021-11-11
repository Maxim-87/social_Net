import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: null | ProfileDataType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    console.log()
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}