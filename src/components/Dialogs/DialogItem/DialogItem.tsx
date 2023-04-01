import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsPropsType} from "../../../Redux/state";




export const DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}