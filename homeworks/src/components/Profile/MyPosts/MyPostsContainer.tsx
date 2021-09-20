import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootAppStoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostDataType} from "../../../redux/store";

// export const MyPostsContainer = () => {
    // // let state = props.store.getState()
    // // let postsElements =
    // //     props.posts.map((p: PostDataType) => <Post message={p.message} likeCount={p.likeCount}/>);
    // //
    // // let newPostElement = React.createRef<HTMLTextAreaElement>();
    // return <StoreContext.Consumer>
    //         {store => {
    //             let state = store.getState();
    //             let addPost = () => {
    //                 store.dispatch(addPostActionCreator());
    //                 // if (newPostElement.current) {
    //                 //     let text = newPostElement.current.value;
    //                 //     // props.dispatch(text);
    //             }
    //             let onChangePost = (text: string) => {
    //                 // let text = newPostElement.current?.value;
    //                 // // let action = ({type:'UPDATE-NEW-POST-TEXT', newText: text})
    //                 let action = updateNewPostTextActionCreator(text)
    //                 store.dispatch(action);
    //             }
    //             return <MyPosts updateNewPostText={onChangePost} addPost={addPost} posts={store.getState().profilePage.postsData}
    //                             newPostText={store.getState().profilePage.newPostText}/>
    //         }}
    //     </StoreContext.Consumer>
    // }

    type MSTPType = {
        newPostText: string;
        posts: PostDataType[];
    }

    type MDTPType = {
        addPost: () => void;
        onChangePost: (text: string) => void;
    }

    const mapStateToProps = (state: RootAppStoreType): MSTPType => {
        return {
            newPostText: state.profilePage.newPostText,
            posts: state.profilePage.postsData
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator())
            },
            onChangePost: (text: string) => {
                const action = updateNewPostTextActionCreator(text)
                dispatch(action)
            }
        }
    }


export const MyPostsContainer = connect<MSTPType, MDTPType, {}, RootAppStoreType>(mapStateToProps, mapDispatchToProps)(MyPosts);
