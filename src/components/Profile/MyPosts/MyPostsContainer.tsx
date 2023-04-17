import React from "react";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";
import {connect} from "react-redux";


let mapStateToProps =(store: StoreType)=>{

    return {
        post: store.profileReducer.post,
        newPostText: store.profileReducer.newPostText
    }
}
let mapDispatchToProps=(dispatch:any)=>{
    return {
        addPost: ()=> {
            dispatch(AddPostAC())
        },
        onPostChange: (text: string)=>{
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)