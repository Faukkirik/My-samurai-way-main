import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type ActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

const profilePage: ArrayProfilePage = {
    post: [
        {id: "1", message: "Hi, how are you?", likeCount: 10},
        {id: "2", message: "It's my first post", likeCount: 12},
        {id: "3", message: "omg", likeCount: 27},
    ] as PostPropsType[],
    newPostText: '',
    profile: null
}
export type ArrayProfilePage = {
    post: PostPropsType[]
    newPostText: string
    profile: null | {}
}
export type PostPropsType = {
    id?: string,
    message: string,
    likeCount: number
}
export const profileReducer =(state: ArrayProfilePage = profilePage, action: ActionType):ArrayProfilePage=>{
    switch (action.type){
        case 'ADD-POST':
            const newPost = {id: new Date().toString(), message: state.newPostText, likeCount: 0}
            state.newPostText = ''

            return {...state, post: [newPost,...state.post]}

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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
export const setUserProfile =(profile: string)=>{
    return {type: 'SET-USER-PROFILE', profile: profile}as const
}
export const getUserProfile =(userId: number)=> (dispatch: Dispatch) =>{
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}