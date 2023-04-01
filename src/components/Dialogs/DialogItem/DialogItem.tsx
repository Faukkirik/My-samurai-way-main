import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


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