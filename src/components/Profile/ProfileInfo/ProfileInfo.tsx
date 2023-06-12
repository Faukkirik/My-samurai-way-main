import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import photosUser from "../../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png";


export const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}: any) => {
    if (!profile){
        return <Preloader/>
    }
    const mainPhotoSelected = (e: any) =>{
       if (e.target.files.length){
           savePhoto(e.target.files[0])
       }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.photo} src={profile.photos.large || photosUser} alt={'hey'} />
                {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div><a href={profile.contacts.facebook}>facebook - {profile.contacts.facebook}</a></div>
                <div><a href={profile.contacts.twitter}>twitter - {profile.contacts.twitter}</a></div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}