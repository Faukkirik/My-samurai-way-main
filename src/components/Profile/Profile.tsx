import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ArrayProfilePage} from "../../Redux/store";

export type ArrayProfilePageState = {
    profilePage: ArrayProfilePage
    dispatch: (action: ActionType) => void
}
export const Profile: React.FC<ArrayProfilePageState> =(props )=>{
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                post={props.profilePage.post}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}