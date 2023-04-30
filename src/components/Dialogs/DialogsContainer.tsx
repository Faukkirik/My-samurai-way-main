import React from "react";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps =(store: StoreType)=>{

    return {
        messagePage: store.dialogsReducer,
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
let AuthRedirectComponent =  withAuthRedirect(Dialogs)
 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)
export default DialogsContainer
