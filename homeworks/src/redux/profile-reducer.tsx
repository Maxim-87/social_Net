export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likeCount: 25},
        {id: 2, message: 'Its, my first post', likeCount: 15},
        {id: 3, message: 'Its first post', likeCount: 215},
        {id: 4, message: 'My first post', likeCount: 150},
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action: any) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        };
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData]
        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newText
        return stateCopy
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: any) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;