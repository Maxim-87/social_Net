import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import p from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {maxlengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../common/FormsConstrols";


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
    // newPostText: string
    addPost: (newPostText: string) => void
    // onChangePost: Function
    // updateNewPostText: (newText: string) => void
    postsData: PostDataType[]
}

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

// let updateNewPostTextActionCreator = (text: string) => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT', newText: text
//     }
// }

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.postsData.map((p: any) => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        //     props.dispatch(text);
        //     // props.dispatch(addPostActionCreator());
        // }

    }

    // let addNewPost = (values: any) => {
    //     props.
    // }

    return (
        <div className={p.postBlock}>
            <h3> My posts </h3>
            <div>
                <AddMyPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={p.posts}>
                {<Post message={props.postsData[0].message} likeCount={props.postsData[0].likeCount}/>}
                {<Post message={props.postsData[1].message} likeCount={props.postsData[1].likeCount}/>}
                {postsElements}
            </div>
        </div>
    )
}

export const maxLength50 = maxlengthCreator(50)

type MyPostDataType = {
    newPostText: string
}

const AddMyPostForm: React.FC<InjectedFormProps<MyPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'}
            validate={[required, maxLength50]}/>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}

const AddMyPostFormRedux = reduxForm<MyPostDataType>({form: 'ProfileAddMyPostForm'})(AddMyPostForm)

export default MyPosts