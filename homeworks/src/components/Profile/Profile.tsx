import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileDataType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhotoThunk: (file: File) => void
    saveProfile: any
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhotoThunk={props.savePhotoThunk}
                saveProfile={props.saveProfile}/>
            <MyPostsContainer/>

        </div>
    )
}