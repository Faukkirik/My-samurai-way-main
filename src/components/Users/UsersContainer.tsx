import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";

import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetUsersAC,
    SetUsersTotalCountAC,
    UnFollowAC,
    UserType
} from "../../Redux/users-reducer";
import UsersC from "./UsersC";

let mapStateToProps =(store: StoreType)=>{
    return {
        users: store.usersReducer.users,
        pageSize: store.usersReducer.pageSize,
        totalUsersCount: store.usersReducer.totalUsersCount,
        currentPage: store.usersReducer.currentPage
    }
}
let mapDispatchToProps=(dispatch:Dispatch )=>{
    return {
        follow: (id:string)=> {
            dispatch(FollowAC(id))
        },
        unFollow: (id: string)=>{
            dispatch(UnFollowAC(id))
        },
        setUsers: (users:Array<UserType>)=>{
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number)=>{
            dispatch(SetUsersTotalCountAC(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
