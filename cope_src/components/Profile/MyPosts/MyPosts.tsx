import React from 'react';
import p from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType, stateType} from "../../../redux/state";
import {AppPropsType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: Function
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map((p: PostDataType) => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            props.updateNewPostText('');
        }
    }

    let onChangePost = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
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
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>*/}
            </div>
        </div>
    )
}