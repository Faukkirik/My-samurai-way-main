import {ActionType, ArrayProfilePage, } from "./state";

export const profileReducer =(state: ArrayProfilePage, action: ActionType):ArrayProfilePage=>{
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