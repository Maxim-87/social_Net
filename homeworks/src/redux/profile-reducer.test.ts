import {profileAPI, usersAPI} from "../Api/Api";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';

type PostDataType = {
    id: number
    message: string
    likeCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type initialStateType = {
    postsData: Array<PostDataType>
    // newPostText: string
    profile: null | ProfileDataType
    status: string
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likeCount: 25},
        {id: 2, message: 'Its, my first post', likeCount: 15}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: action.newPostText,
            likeCount: 0
        };
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData]
        stateCopy.postsData.push(newPost);
        // stateCopy.newPostText = '';
        return stateCopy
    } else if (action.type === SET_STATUS) {
        let stateCopy = {...state};
        stateCopy.status = action.status
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
export const addPostActionCreator = (newPostText: any) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: null | ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status));
        })
}


type ActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export default profileReducer;
