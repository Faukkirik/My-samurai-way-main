import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>
export type ActionType = AddPostActionType | SetUserProfileActionType | SetUserStatusActionType

const profilePage: ArrayProfilePage = {
    post: [
        {id: "1", message: "Hi, how are you?", likeCount: 10},
        {id: "2", message: "It's my first post", likeCount: 12},
        {id: "3", message: "omg", likeCount: 27},
    ] as PostPropsType[],
    profile: null,
    status: ''
}
export type ArrayProfilePage = {
    post: PostPropsType[]
    profile: null | {}
    status: string
}
export type PostPropsType = {
    id?: string,
    message: string,
    likeCount: number
}
export const profileReducer =(state: ArrayProfilePage = profilePage, action: ActionType):ArrayProfilePage=>{
    switch (action.type){
        case 'ADD-POST':
            const newPost = {id: new Date().toString(), message: action.newPostText, likeCount: 0}
            return {...state, post: [newPost,...state.post]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
        default :
            return state
    }
}

export const AddPostAC =(newPostText: string)=>{
    return {type: 'ADD-POST', newPostText}as const
}
export const setUserProfile =(profile: string)=>{
    return {type: 'SET-USER-PROFILE', profile: profile}as const
}
export const setUserStatus =(status: string)=>{
    return {type: 'SET-USER-STATUS', status: status}as const
}
export const getUserProfile =(userId: number)=> (dispatch: Dispatch) =>{
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}
export const getStatus =(userId: number)=> (dispatch: Dispatch) =>{
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}
export const updateStatus =(status: string)=> (dispatch: Dispatch) =>{
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0){
                dispatch(setUserStatus(res.data))
            }
        })
}