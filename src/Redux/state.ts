import {rerenderEntireTree} from "../render";

export const state: StatePropsType = {
    profilePage: {
        post: [
            {id: "1", message: "Hi, how are you?", likeCount: 10},
            {id: "2", message: "It's my first post", likeCount: 12},
            {id: "3", message: "omg", likeCount: 27},
        ],
    },
    messagesPage: {
        dialogs: [
            {id: "1", name: 'Dimysh'},
            {id: "2", name: 'Andrey'},
            {id: "3", name: 'Sweta'},
            {id: "4", name: 'Sasha'},
            {id: "5", name: 'Valera'},
        ],
        message: [
            {id: "1", message: "Hi"},
            {id: "2", message: "Hi,hi"},
            {id: "3", message: "How are you?"},
            {id: "4", message: "I'm , Oke"},
        ]
    },
    newsPage: {},
    musicPage: {},
    settingsPage: {}
}

export const addPost =(message: string)=>{
    const newPost:PostPropsType = {id: new Date().toString(), message:message, likeCount: 0}
    state.profilePage.post.push(newPost)
    rerenderEntireTree(state)
}

export type StatePropsTypeApp = {
    state: StatePropsType
}
export type StatePropsType = {
    profilePage : ArrayProfilePage
    messagesPage : ArrayMessagePage
    newsPage : {}
    musicPage : {}
    settingsPage : {}
}
export type ArrayMessagePage = {
    dialogs: Array<DialogsPropsType>
    message: Array<MessagePropsType>
}
export type DialogsPropsType = {
    id: string,
    name: string
}
export type MessagePropsType = {
    id: string,
    message: string
}
export type ArrayProfilePage = {
    post: PostPropsType[]

}
export type PostPropsType = {
    id?: string,
    message: string,
    likeCount: number
}