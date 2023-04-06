import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ArrayProfilePage, PostPropsType, StatePropsType} from "../../Redux/state";

export type ArrayProfilePageState = {
    post: PostPropsType[]
    addPost: (message: string) => void
}
export const Profile: React.FC<ArrayProfilePageState> =(props )=>{

    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post} addPost={props.addPost}/>
        </div>
    )
}