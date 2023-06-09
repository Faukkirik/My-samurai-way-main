export type AddMessageActionType = ReturnType<typeof AddMessageAC>
export type ActionType = AddMessageActionType

const dialogsPage: ArrayMessagePage = {
    dialogs: [
        {id: "1", name: 'Dimysh'},
        {id: "2", name: 'Andrey'},
        {id: "3", name: 'Sweta'},
        {id: "4", name: 'Sasha'},
        {id: "5", name: 'Valera'},
    ] as DialogsPropsType[],
    message: [
        {id: "1", message: "Hi"},
        {id: "2", message: "Hi,hi"},
        {id: "3", message: "How are you?"},
        {id: "4", message: "I'm , Oke"},
    ] as MessagePropsType[]
}
export type ArrayMessagePage = {
    dialogs: Array<DialogsPropsType>
    message: Array<MessagePropsType>
}
export type DialogsPropsType = {
    id: string,
    name: string
}
export type MessagePropsType = {
    id: string,
    message: string
}
export const dialogsReducer = (state: ArrayMessagePage = dialogsPage, action: ActionType): ArrayMessagePage => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {id: new Date().toString(), message: action.newMessageBody}

            return {...state, message: [...state.message, newMessage]}
        default:
            return state
    }
}

export const AddMessageAC =(newMessageBody: string)=>{
    return {type: 'ADD-MESSAGE', newMessageBody}as const
}
