import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";




type AsdaAPrasdops = {
    dialogsData: Array<{id: string, name: string}>
    messageData: Array<{id: string, message: string}>
}



export const Dialogs = (props: AsdaAPrasdops) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map((el) => {
                    return (
                        <DialogItem
                            id={el.id}
                            name={el.name}
                            key={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {props.messageData.map((el) => {
                    return (
                        <Message
                            id={el.id}
                            message={el.message}
                            key={el.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}