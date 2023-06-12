import React from "react";
import {Contact} from "./ProfileInfo";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'

const ProfileDataForm =({ handleSubmit, profile, error}: any)=>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name</b> {createField("Full name", Input, "fullName", [])}
            </div>
            <div>
                <b>Looking for a job:</b> {createField("lookingForAJob", Input, "lookingForAJob", [], {type: "checkbox"})}
            </div>
                <div>
                    <b>My professional skills: </b>{createField("lookingForAJobDescription", Textarea, "lookingForAJobDescription", [])}
                </div>
            <div>
                <b>About me:</b> {createField("aboutMe", Textarea, "aboutMe", [])}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>{
                return (
                    <div className={s.contact} key={key}>
                        <b>{key}: {createField(key,Input,"contacts."+ key,[])}</b>
                    </div>
                    )
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm