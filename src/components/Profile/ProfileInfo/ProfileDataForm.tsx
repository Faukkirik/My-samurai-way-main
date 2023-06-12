import React from "react";
import {Contact} from "./ProfileInfo";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm =({ handleSubmit}: any)=>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
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
            {/*<div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>{
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                />
            })}
            </div>*/}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm