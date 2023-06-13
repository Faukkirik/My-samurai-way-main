import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import photosUser from "../../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png";
import ProfileDataForm from "./ProfileDataForm";


export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: any) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit =  (formData: any) =>{
         saveProfile(formData).then(()=>{
             setEditMode(false)
         })

    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.photo} src={profile.photos.large || photosUser} alt={'hey'}/>
                {isOwner && <input type="file" onChange={mainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile}  onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

                {/*<div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div><a href={profile.contacts.facebook}>facebook - {profile.contacts.facebook}</a></div>
                <div><a href={profile.contacts.twitter}>twitter - {profile.contacts.twitter}</a></div>*/}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export const ProfileData = ({profile, isOwner, goToEditMode}: any) => {

    return (
        <div>
            <div>
                {isOwner && <button onClick={goToEditMode}>edit</button>}
            </div>
            <div>
                <b>Full name</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                />
            })}
            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}: any) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}: </b>{contactValue}
        </div>
    )
}