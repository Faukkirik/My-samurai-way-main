import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile =(props: any)=>{
    return(
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                saveProfile={props.saveProfile}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer onPostChange={props.newPostText}/>
        </div>
    )
}