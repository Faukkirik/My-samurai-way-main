import s from "../Dialogs.module.css";
import React from "react";
import {MessagePropsType} from "../../../Redux/state";


export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}