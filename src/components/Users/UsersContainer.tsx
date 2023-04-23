import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";

import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../Redux/users-reducer";
import UsersC from "./UsersC";

let mapStateToProps =(store: StoreType)=>{
    return {
        users: store.usersReducer.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
