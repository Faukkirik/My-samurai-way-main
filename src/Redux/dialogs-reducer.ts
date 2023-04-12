import {ActionType, ArrayMessagePage} from "./state";

export const dialogsReducer = (state: ArrayMessagePage, action: ActionType): ArrayMessagePage => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: new Date().toString(), message: state.newMessageText}
            state.message.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const AddMessageAC =()=>{
    return {type: 'ADD-MESSAGE'}as const
}
export const UpdateNewMessageTextAC =(text: string)=>{
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}as const
}