import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ArrayMessagePage} from "../../Redux/store";
import {DialogsPropsType, MessagePropsType} from "../../Redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsType = {
    messagePage: ArrayMessagePage
    onMessageChange: (text: string) => void
    addMessage: () => void
}
export const Dialogs = (props: any) => {

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagePage.dialogs.map((el: DialogsPropsType) => {
                    return (
                        <DialogItem
                            id={el.id}
                            name={el.name}
                            key={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                <div>{props.messagePage.message.map((el: MessagePropsType) => {
                    return (
                        <Message
                            id={el.id}
                            message={el.message}
                            key={el.id}
                        />
                    )
                })}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageBody"} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)