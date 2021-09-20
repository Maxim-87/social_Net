

let rerenderEntireTree = (state: stateType) => {
    console.log('State rerender')
}


export type stateType = {
    posts: PostsDataType
    message: messageType[]
    dialogs: dialogsDataType
    newPostText: string
}

export type PostDataType = {
    id: number
    message: string
    likeCount: number


}
export type PostsDataType = Array<PostDataType>

export let postsData: PostsDataType = [
    {id: 1, message: 'Hi, how are you', likeCount: 25},
    {id: 2, message: 'Its, my first post', likeCount: 15},
    {id: 3, message: 'Its first post', likeCount: 215},
    {id: 4, message: 'My first post', likeCount: 150},
]

export type dialogDataType = {
    id: number,
    name: string
}
export type dialogsDataType = Array<dialogDataType>
export let dialogsData: dialogsDataType = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Viktor'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Sveta'},
]

export type messageType = {
    id: number,
    message: string
}
export let message: Array<messageType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'I am O.K.'}
]

export const state: stateType = {
    message: message,
    dialogs: dialogsData,
    posts: postsData,
    newPostText: ''
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
    }
    state.posts.push(newPost)
    state.newPostText = '';
    rerenderEntireTree(state)
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer
}

export let updateNewPostText = (newText: string) => {
    state.newPostText = newText
    rerenderEntireTree(state)
}
