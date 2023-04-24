import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://img3.badfon.ru/original/1920x1080/e/34/utro-tuman-lep-peyzazh-3038.jpg" alt="LOW"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large: ''} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div><a href={props.profile.contacts.facebook}>facebook - {props.profile.contacts.facebook}</a></div>
                <div><a href={props.profile.contacts.twitter}>twitter - {props.profile.contacts.twitter}</a></div>
                ava + description
            </div>
        </div>
    )
}