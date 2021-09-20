import React from 'react';
import p from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/store";


type MyPostsPropsType = {
    // profilePage: profilePageType
    posts: Array<PostDataType>
    // dispatch: (action: any) => void
    newPostText: string
    addPost: () => void
    onChangePost: Function
}

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }
//
// let updateNewPostTextActionCreator = (text: any) => {
//     return {
//         type:'UPDATE-NEW-POST-TEXT', newText: text
//     }
// }

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map((p: PostDataType) => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        //     // props.dispatch(text);
        //     props.dispatch(addPostActionCreator());
        // }

    }

    let onChangePost = () => {
        let text = newPostElement.current?.value;
        // let action = ({type:'UPDATE-NEW-POST-TEXT', newText: text})
        // let action = updateNewPostTextActionCreator(text)
        // props.dispatch(action);
        props.onChangePost(text);
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
                {postsElements}
                {/*<Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>*/}
            </div>
        </div>
    )
}