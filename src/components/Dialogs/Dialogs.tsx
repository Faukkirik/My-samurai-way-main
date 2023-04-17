import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {ActionType, ArrayMessagePage} from "../../Redux/store";

export type DialogsType = {
    dispatch: (action: ActionType)=> void
    messagePage: ArrayMessagePage
}
export const Dialogs = (props: DialogsType) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(AddMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagePage.dialogs.map((el) => {
                    return (
                        <DialogItem
                            id={el.id}
                            name={el.name}
                            key={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                <div>{props.messagePage.message.map((el) => {
                    return (
                        <Message
                            id={el.id}
                            message={el.message}
                            key={el.id}
                        />
                    )
                })}
                </div>
                <div>
                    <div><textarea
                        placeholder={'Enter your message'}
                        value={props.messagePage.newMessageText}
                        onChange={onMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={addMessage}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
