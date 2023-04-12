import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostPropsType} from "../../Redux/state";

export type ArrayProfilePageState = {
    post: PostPropsType[]
    dispatch: (action: ActionType) => void
    newText: string
}
export const Profile: React.FC<ArrayProfilePageState> =(props )=>{

    return(
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                post={props.post}
                newPostText={props.newText}
                dispatch={props.dispatch}
            />
        </div>
    )
}