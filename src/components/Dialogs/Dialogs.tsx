import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, AddMessageAC, ArrayMessagePage, UpdateNewMessageTextAC} from "../../Redux/state";

export type DialogsType = {
    messagesPage: ArrayMessagePage
    dispatch: (action: ActionType) => void
}
export const Dialogs: React.FC<DialogsType> = (props) => {
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(AddMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagesPage.dialogs.map((el) => {
                    return (
                        <DialogItem
                            id={el.id}
                            name={el.name}
                            key={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                <div>{props.messagesPage.message.map((el) => {
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
                        value={props.messagesPage.newMessageText}
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
