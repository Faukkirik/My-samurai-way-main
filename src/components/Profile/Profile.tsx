import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../Redux/state";

export type ArrayProfilePageState = {
    post: PostPropsType[]
    addPost: () => void
    updateNewPostText:(newText: string)=> void
    newText: string
}
export const Profile: React.FC<ArrayProfilePageState> =(props )=>{

    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                post={props.post}
                addPost={props.addPost}
                newPostText={props.newText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}