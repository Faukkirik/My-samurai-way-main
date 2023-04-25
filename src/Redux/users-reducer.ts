export type FollowedActionType = ReturnType<typeof follow>
export type UnFollowedActionType = ReturnType<typeof unFollow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingActionType = ReturnType<typeof toggleIsFollowing>

export type ActionType = FollowedActionType | UnFollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType | toggleIsFollowingActionType

const userPage = {
    users: [] as Array<UserType>,
    pageSize: 5,
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
            return {...state, users: state.users.map((el)=>el.id === action.id ? {...el, followed: true} : el)}
        case 'UN-FOLLOW':
            return {...state, users: state.users.map((el)=>el.id === action.id ? {...el, followed: false} : el)}
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

export const follow =(id: string)=>{
    return {type: 'FOLLOW', id: id}as const
}
export const unFollow =(id: string)=>{
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