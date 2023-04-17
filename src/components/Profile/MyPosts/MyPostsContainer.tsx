import React from "react";
import {ActionType, ArrayProfilePage} from "../../../Redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
export type ArrayProfilePageState = {
    profilePage: ArrayProfilePage
    dispatch: (action: ActionType) => void
}
export const MyPostsContainer: React.FC<ArrayProfilePageState> = (props) => {
    const addPost = () => {
       props.dispatch(AddPostAC())
    }
    const onPostChange =(text: string)=>{
        props.dispatch(UpdateNewPostTextAC(text))
    }
    return (
        <MyPosts
            post={props.profilePage.post}
            newPostText={props.profilePage.newPostText}
            addPost={addPost}
            onPostChange={onPostChange}
        />
    )
}