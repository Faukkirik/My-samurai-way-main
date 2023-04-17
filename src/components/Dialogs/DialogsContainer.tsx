import React from "react";

import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {ActionType, ArrayMessagePage} from "../../Redux/store";
import {Dialogs} from "./Dialogs";

export type DialogsType = {
    dispatch: (action: ActionType)=> void
    messagePage: ArrayMessagePage
}
export const DialogsContainer = (props: DialogsType) => {

    const onMessageChange = (text: string) => {
        props.dispatch(UpdateNewMessageTextAC(text))
    }
    const addMessage = () => {
        props.dispatch(AddMessageAC())
    }
    return (
        <Dialogs
            messagePage={props.messagePage}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
        />
    )
}
