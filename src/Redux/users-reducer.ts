export type FollowedActionType = ReturnType<typeof FollowAC>
export type UnFollowedActionType = ReturnType<typeof UnFollowAC>
export type SetUsersActionType = ReturnType<typeof SetUsersAC>
export type SetCurrentPageActionType = ReturnType<typeof SetCurrentPageAC>
export type SetUsersTotalCountActionType = ReturnType<typeof SetUsersTotalCountAC>
export type ToggleIsFetchingActionType = ReturnType<typeof ToggleIsFetchingAC>

export type ActionType = FollowedActionType | UnFollowedActionType | SetUsersActionType | SetCurrentPageActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType

const userPage = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default :
            return state
    }
}

export const FollowAC =(id: string)=>{
    return {type: 'FOLLOW', id: id}as const
}
export const UnFollowAC =(id: string)=>{
    return {type: 'UN-FOLLOW', id: id}as const
}
export const SetUsersAC =(users: Array<UserType>)=>{
    return {type: 'SET-USERS', users: users}as const
}
export const SetCurrentPageAC =(currentPage: number)=>{
    return {type: 'SET-CURRENT-PAGE', currentPage: currentPage}as const
}
export const SetUsersTotalCountAC =(totalCount: number)=>{
    return {type: 'SET-TOTAL-USER-COUNT', totalCount: totalCount}as const
}
export const ToggleIsFetchingAC =(isFetching: boolean)=>{
    return {type: 'TOGGLE-IS-FETCHING', isFetching: isFetching}as const
}