import {StoreType} from "./redux-store";

export const getUsersSelector=(store: StoreType)=>{
    return store.usersReducer.users
}
export const getPageSizeSelector=(store: StoreType)=>{
    return store.usersReducer.pageSize
}
export const getTotalUsersCountSelector=(store: StoreType)=>{
    return store.usersReducer.totalUsersCount
}
export const getCurrentPageSelector=(store: StoreType)=>{
    return store.usersReducer.currentPage
}
export const getIsFetchingSelector=(store: StoreType)=>{
    return store.usersReducer.isFetching
}
export const getFollowingInProgressSelector=(store: StoreType)=>{
    return store.usersReducer.followingInProgress
}