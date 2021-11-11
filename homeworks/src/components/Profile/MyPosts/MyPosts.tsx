import React from 'react';
import p from './MyPosts.module.css';
import {Post} from "./Post/Post";



export type profilePageType = {
    postsData: PostDataType[]
    newPostText: string
}

export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

type MyPostsPropsType = {
    // profilePage: profilePageType
    // posts: Array<PostDataType>
    // dispatch: (action: any) => void
    newPostText: string
    addPost: () => void
    // onChangePost: Function
    updateNewPostText: (newText: string) => void
    postsData: PostDataType[]
}

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

let updateNewPostTextActionCreator = (text: string) => {
    return {
        type:'UPDATE-NEW-POST-TEXT', newText: text
    }
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.postsData.map((p: any) => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        //     props.dispatch(text);
        //     // props.dispatch(addPostActionCreator());
        // }

    }

    let onChangePost = () => {
        let text = newPostElement.current?.value;
        // let action = ({type:'UPDATE-NEW-POST-TEXT', newText: text})
        // let action = updateNewPostTextActionCreator(text)
        // props.dispatch(action);
        text && props.updateNewPostText(text);
    }

    return (
        <div className={p.postBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangePost}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {<Post message={props.postsData[0].message} likeCount={props.postsData[0].likeCount}/>}
                {<Post message={props.postsData[1].message} likeCount={props.postsData[1].likeCount}/>}
                {postsElements}
            </div>
        </div>
    )
};