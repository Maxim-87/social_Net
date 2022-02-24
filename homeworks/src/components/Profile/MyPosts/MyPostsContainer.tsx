import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer"
import MyPosts, {PostDataType} from "./MyPosts";
import {connect} from "react-redux";
import {RootAppStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MSTPType = {
    // newPostText: string;
    postsData: PostDataType[];
}

type MDTPType = {
    addPost: (newPostText: string) => void;
    // updateNewPostText: (text: string) => void;
}

const mapStateToProps = (state: RootAppStoreType): MSTPType => {
    return {
        // newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        addPost: (newPostText: any) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
