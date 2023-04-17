import React from "react";
import {ActionType, ArrayProfilePage} from "../../../Redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
export type ArrayProfilePageState = {
    profilePage: ArrayProfilePage
    dispatch: (action: ActionType) => void
}

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