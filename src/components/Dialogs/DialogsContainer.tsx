import React from "react";
import {AddMessageAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps =(store: StoreType)=>{

    return {
        messagePage: store.dialogsReducer,
    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        addMessage: (newMessageBody: string)=> {
            dispatch(AddMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
