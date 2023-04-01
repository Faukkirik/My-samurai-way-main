import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    const dialogsData = [
        {id: "1", name: 'Dimysh'},
        {id: "2", name: 'Andrey'},
        {id: "3", name: 'Sweta'},
        {id: "4", name: 'Sasha'},
        {id: "5", name: 'Valera'},
    ]
    const messageData = [
        {id: "1", message: "Hi"},
        {id: "2", message: "Hi,hi"},
        {id: "3", message: "How are you?"},
        {id: "4", message: "I'm , Oke"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((el) => {
                    return (
                        <DialogItem
                            id={el.id}
                            name={el.name}
                            key={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messageData.map((el) => {
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