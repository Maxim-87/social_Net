export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

type PostDataType ={
    id: number
    message: string
    likeCount: number
}

export type ContactsType={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileDataType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:ContactsType
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type initialStateType = {
    postsData:Array<PostDataType>
    newPostText: string
    profile: null | ProfileDataType
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likeCount: 25},
        {id: 2, message: 'Its, my first post', likeCount: 15},
        {id: 3, message: 'Its first post', likeCount: 215},
        {id: 4, message: 'My first post', likeCount: 150},
    ],
    newPostText: '',
    profile: null
}
const profileReducer = (state:initialStateType = initialState, action: ActionType):initialStateType => {
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

    } else if (action.type === SET_USER_PROFILE) {
        let stateCopy = {...state};
        stateCopy.profile = action.profile
        return stateCopy
        return state;

    } else {
        return state
    }
}
    export const addPostActionCreator = () => ({type: ADD_POST}  as const)
    export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}  as const)
    export const setUserProfile = (profile: null|ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)


type ActionType = ReturnType<typeof addPostActionCreator>
| ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

    export default profileReducer;
