import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


export const ProfileInfo = ({profile, status, updateStatus}: any) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large: ''} alt={'hey'}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div><a href={profile.contacts.facebook}>facebook - {profile.contacts.facebook}</a></div>
                <div><a href={profile.contacts.twitter}>twitter - {profile.contacts.twitter}</a></div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}