import React from "react";
import {AddPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps =(store: StoreType)=>{

    return {
        post: store.profileReducer.post
    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        addPost: (newPostText: string)=> {
            dispatch(AddPostAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)