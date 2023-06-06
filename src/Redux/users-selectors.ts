import {StoreType} from "./redux-store";
import {createSelector} from "reselect";

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
export const getUsersSuperSelector = createSelector(getUsersSelector, (users)=>{
    return users.filter((u) => u)
})