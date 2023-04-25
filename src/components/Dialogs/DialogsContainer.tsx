import React from "react";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps =(store: StoreType)=>{

    return {
        messagePage: store.dialogsReducer,
        isAuth: store.authReducer.isAuth
    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
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
