import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ArrayProfilePage} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ArrayProfilePageState = {
    profilePage: ArrayProfilePage
    dispatch: (action: ActionType) => void
}
export const Profile: React.FC<ArrayProfilePageState> =(props )=>{
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
}