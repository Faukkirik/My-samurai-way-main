import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {message} from "antd";

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>
export type DeletePostActionType = ReturnType<typeof DeletePostAC>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
export type ActionType = AddPostActionType | SetUserProfileActionType | SetUserStatusActionType | DeletePostActionType | SavePhotoSuccessActionType

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
        case 'DELETE-POST':
            return {...state, post: state.post.filter(p=>p.id !== action.id)}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
        case 'SET-PHOTO-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default :
            return state
    }
}

export const AddPostAC =(newPostText: string)=>{
    return {type: 'ADD-POST', newPostText}as const
}
export const DeletePostAC =(id: string)=>{
    return {type: 'DELETE-POST', id}as const
}
export const setUserProfile =(profile: string)=>{
    return {type: 'SET-USER-PROFILE', profile: profile}as const
}
export const setUserStatus =(status: string)=>{
    return {type: 'SET-USER-STATUS', status: status}as const
}
export const savePhotoSuccess =(photos: any)=>{
    return {type: 'SET-PHOTO-SUCCESS', photos}as const
}
export const getUserProfile =(userId: number)=> async (dispatch: Dispatch) =>{
    const res = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(res.data))
}
export const getStatus =(userId: number)=> async (dispatch: Dispatch) =>{
    const res = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(res.data))
}
export const updateStatus =(status: string)=> async (dispatch: Dispatch) =>{
    const res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0){
                dispatch(setUserStatus(res.data))
            }
}
export const savePhoto =(file: any)=> async (dispatch: Dispatch) =>{
    const res = await profileAPI.savePhoto(file)
            if (res.data.resultCode === 0){
                dispatch(savePhotoSuccess(res.data.data.photos))
            }
}
export const saveProfile =(profile: any)=> async (dispatch: Dispatch, getState: any) =>{
    const userId = getState().authReducer.userId
    const res = await profileAPI.saveProfile(profile)
            if (res.data.resultCode === 0){
                // @ts-ignore
                dispatch(getUserProfile(userId))
            } else {
                dispatch(stopSubmit("edit-profile",{_error: res.data.messages[0]}))
                return Promise.reject(res.data.messages[0])
            }
}