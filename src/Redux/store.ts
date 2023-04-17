import {AddPostAC, profileReducer, UpdateNewPostTextAC} from "./profile-reducer";
import {AddMessageAC, dialogsReducer, UpdateNewMessageTextAC} from "./dialogs-reducer";

export const store: StatePropsTypeApp = {
    _state: {
        profilePage: {
            post: [
                {id: "1", message: "Hi, how are you?", likeCount: 10},
                {id: "2", message: "It's my first post", likeCount: 12},
                {id: "3", message: "omg", likeCount: 27},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: "1", name: 'Dimysh'},
                {id: "2", name: 'Andrey'},
                {id: "3", name: 'Sweta'},
                {id: "4", name: 'Sasha'},
                {id: "5", name: 'Valera'},
            ],
            message: [
                {id: "1", message: "Hi"},
                {id: "2", message: "Hi,hi"},
                {id: "3", message: "How are you?"},
                {id: "4", message: "I'm , Oke"},
            ],
            newMessageText: ''
        },
        newsPage: {},
        musicPage: {},
        settingsPage: {}
    },
    _callSubscriber(){
        console.log('state changed')
    },

    subscribe (observer){
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action: any){
        this._state.profilePage = profileReducer(store._state.profilePage,action)
        this._state.messagesPage = dialogsReducer(store._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}


export type StatePropsTypeApp = {
    _state: StatePropsType
    _callSubscriber: (state: StatePropsType)=>void
    subscribe: (observer:()=>void)=>void
    getState: ()=>StatePropsType
    dispatch: (action: ActionType) => void

}
export type StatePropsType = {
    profilePage : ArrayProfilePage
    messagesPage : ArrayMessagePage
    newsPage : {}
    musicPage : {}
    settingsPage : {}
}
export type ArrayMessagePage = {
    dialogs: Array<DialogsPropsType>
    message: Array<MessagePropsType>
    newMessageText: string
}
export type DialogsPropsType = {
    id: string,
    name: string
}
export type MessagePropsType = {
    id: string,
    message: string
}
export type ArrayProfilePage = {
    post: PostPropsType[]
    newPostText: string
}
export type PostPropsType = {
    id?: string,
    message: string,
    likeCount: number
}




export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextAC>
export type AddMessageActionType = ReturnType<typeof AddMessageAC>
export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextAC>
export type ActionType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType
// @ts-ignore
window.store = store