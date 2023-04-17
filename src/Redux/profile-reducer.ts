import {ArrayProfilePage, } from "./store";

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextAC>
export type ActionType = AddPostActionType | UpdateNewPostTextActionType

const profilePage = {
    post: [
        {id: "1", message: "Hi, how are you?", likeCount: 10},
        {id: "2", message: "It's my first post", likeCount: 12},
        {id: "3", message: "omg", likeCount: 27},
    ],
    newPostText: ''
}
export const profileReducer =(state: ArrayProfilePage = profilePage, action: ActionType):ArrayProfilePage=>{
    switch (action.type){
        case 'ADD-POST':
            const newPost = {id: new Date().toString(), message: state.newPostText, likeCount: 0}
            state.post.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default :
            return state
    }
}

export const AddPostAC =()=>{
    return {type: 'ADD-POST'}as const
}
export const UpdateNewPostTextAC =(text: string)=>{
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}as const
}