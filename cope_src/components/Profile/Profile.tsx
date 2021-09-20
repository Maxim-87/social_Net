import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppPropsType} from "../../App";
import {PostDataType, PostsDataType, stateType} from "../../redux/state";

export type PostPropsType = {
    addPost: (postMessage: string) => void
    posts: Array<PostDataType>
    newPostText: string
    updateNewPostText: Function

}

export const Profile = (props: PostPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}