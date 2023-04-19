export type FollowedActionType = ReturnType<typeof FollowAC>
export type UnFollowedActionType = ReturnType<typeof UnFollowAC>
export type SetUsersActionType = ReturnType<typeof SetUsersAC>
export type ActionType = FollowedActionType | UnFollowedActionType | SetUsersActionType

const userPage = {
    users: [] as Array<UserType>
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
            return {...state, users: [...state.users, ...action.users]}
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