import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

type StoreType = {
    _state: stateType
    getState: () => stateType
    rerenderEntireTree: (state: stateType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

// type ActionTYpe = AddPOstActionType | DeletePOstActionType
// const ADD_APOST_ACTION = 'ADD_APOST_ACTION'
//
// type AddPOstActionType = {
//     type: typeof ADD_APOST_ACTION,
//     newPostETxt: string
// }
//
// type DeletePOstActionType = {
//     type: 'DELETE_POST_ACTION',
//     newPostETxt: string
// }

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likeCount: 25},
                {id: 2, message: 'Its, my first post', likeCount: 15},
                {id: 3, message: 'Its first post', likeCount: 215},
                {id: 4, message: 'My first post', likeCount: 150},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Sveta'},
            ],
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'I am O.K.'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this.rerenderEntireTree = observer
    },
    rerenderEntireTree(state: stateType) {
        console.log('State rerender')
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.newPostText,
    //         likeCount: 0
    //     }
    //     this._state.postsData.push(newPost)
    //     this._state.newPostText = '';
    //     this.rerenderEntireTree(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.newPostText = newText
    //     this.rerenderEntireTree(this._state)
    // },
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this.rerenderEntireTree(this._state);
    }
}


// let rerenderEntireTree = (state: stateType) => {
//     console.log('State rerender')
// }

// export const addPostActionCreator = () => {
//     return {
//             type: ADD_POST
//         }
//     } - сделали упрошенный синтаксис


// export const updateNewPostTextActionCreator = (text: any) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// } - - сделали упрошенный синтаксис

export type stateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sidebar: any
    // postsData: PostDataType[],
    // message: messageType[]
    // dialogsData: dialogsDataType
    // newPostText: string
    // newMessageBody: string
    // sidebar: string
}

export type profilePageType = {
    postsData: PostDataType[]
    newPostText: string
}

export type dialogsPageType = {
    dialogsData: dialogsDataType,
    newMessageBody: string,
    message: messageType[]

}

export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

export type PostsDataType = Array<PostDataType>

// export let postsData: PostsDataType = [
//     {id: 1, message: 'Hi, how are you', likeCount: 25},
//     {id: 2, message: 'Its, my first post', likeCount: 15},
//     {id: 3, message: 'Its first post', likeCount: 215},
//     {id: 4, message: 'My first post', likeCount: 150},
// ]

export type dialogDataType = {
    id: number,
    name: string
}

export type dialogsDataType = dialogDataType[]
// export let dialogsData: dialogsDataType = [
//     {id: 1, name: 'Andrey'},
//     {id: 2, name: 'Viktor'},
//     {id: 3, name: 'Valera'},
//     {id: 4, name: 'Sveta'},
// ]

export type messageType = {
    id: number,
    message: string
}
// export let message: Array<messageType> = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you'},
//     {id: 3, message: 'I am O.K.'}
// ]


export const state: stateType = {
    // message: store._state.dialogsPage.message,
    dialogsPage: store._state.dialogsPage,
    profilePage: store._state.profilePage,
    // newPostText: '',
    // newMessageBody: '',
    sidebar: store._state.sidebar
}


// export let addPost = () => {
//         let newPost = {
//         id: 5,
//         message: state.newPostText,
//         likeCount: 0
//     }
//     state.posts.push(newPost)
//     state.newPostText = '';
//     rerenderEntireTree(state)
// }

// export let updateNewPostText = (newText: string) => {
//     state.newPostText= newText
//     rerenderEntireTree(state)
// }