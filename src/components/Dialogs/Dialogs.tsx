import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemType ={
    id: string
    name: string
}

export const DialogItem = (props: DialogItemType)=>{
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
export const Message =(props:any)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dimych"} id={"1"}/>
                <DialogItem name={"Andrey"} id={"2"}/>
                <DialogItem name={"Sweta"} id={"3"}/>
                <DialogItem name={"Sasha"} id={"4"}/>
                <DialogItem name={"Valera"} id={"5"}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={"Hi,hi"}/>
                <Message message={'How are you?'}/>
            </div>
        </div>
    )
}