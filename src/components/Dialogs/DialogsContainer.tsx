import React from "react";

import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {ActionType, ArrayMessagePage, StatePropsType} from "../../Redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";

export type DialogsType = {
    dispatch: (action: ActionType)=> void
    messagePage: ArrayMessagePage
}
let mapStateToProps =(store: StoreType)=>{

    return {
        messagePage: store.dialogsReducer
    }
}
let mapDispatchToProps=(dispatch:any)=>{
    return {
        addMessage: ()=> {
            dispatch(AddMessageAC())
        },
        onMessageChange: (text: string)=>{
            dispatch(UpdateNewMessageTextAC(text))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
