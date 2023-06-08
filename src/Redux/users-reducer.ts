import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

export type FollowedActionType = ReturnType<typeof followSuccess>
export type UnFollowedActionType = ReturnType<typeof unFollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingActionType = ReturnType<typeof toggleIsFollowing>

export type ActionType = FollowedActionType | UnFollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType | toggleIsFollowingActionType

const userPage = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3]
}
export type UserType = {
    id: string, photoUrl:string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}
}
export type UsersType = typeof userPage
export const usersReducer =(state:UsersType = userPage, action: ActionType):UsersType => {
    switch (action.type){
        case 'FOLLOW':
            return {...state, users: updateObjectInArray(state.users, action.id, "id", {followed: true})}
        case 'UN-FOLLOW':
            return {...state, users: updateObjectInArray(state.users, action.id, "id", {followed: false})}
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(el=>el !== action.id)}
        default :
            return state
    }
}

export const followSuccess =(id: string)=>{
    return {type: 'FOLLOW', id: id}as const
}
export const unFollowSuccess =(id: string)=>{
    return {type: 'UN-FOLLOW', id: id}as const
}
export const setUsers =(users: Array<UserType>)=>{
    return {type: 'SET-USERS', users: users}as const
}
export const setCurrentPage =(currentPage: number)=>{
    return {type: 'SET-CURRENT-PAGE', currentPage: currentPage}as const
}
export const setTotalUsersCount =(totalCount: number)=>{
    return {type: 'SET-TOTAL-USER-COUNT', totalCount: totalCount}as const
}
export const toggleIsFetching =(isFetching: boolean)=>{
    return {type: 'TOGGLE-IS-FETCHING', isFetching: isFetching}as const
}
export const toggleIsFollowing =(followingInProgress: boolean, id: number)=>{
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress: followingInProgress, id}as const
}

export const getUsers =(currentPage:number,pageSize:number)=> {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
    }
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: any, apiMethod: any, actionCreator: any)=>{
    dispatch(toggleIsFollowing(true, userId))
    let res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
}
export const follow =(userId: any)=> {
    return async (dispatch: Dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

    }
}
export const unFollow =(userId: any)=> {
    return async (dispatch: Dispatch) => {
        let apiMethod = usersAPI.unFollow.bind(usersAPI)
        await followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)

    }
}