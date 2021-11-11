import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

export type ProfilePropsType = {
    profile: null | ProfileDataType
    isAuth: boolean
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    if(props.isAuth == false) return <Redirect to={'/login'}/>
    console.log()
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}