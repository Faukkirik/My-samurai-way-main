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
            ]
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

    _addPost(){
        const newPost = {id: new Date().toString(), message: this._state.profilePage.newPostText, likeCount: 0}
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },

    dispatch(action: ActionType){
        if (action.type === 'ADD-POST'){
            this._addPost()
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText)
        }
        else {return console.log('ERROR')}
    }
}
export const AddPostAC =():AddPostActionType=>{
   return {type: 'ADD-POST'}as const
}
export const UpdateNewPostTextAC=(text: string):UpdateNewPostTextActionType=>{
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}as const
}
export type StatePropsTypeApp = {
    _state: StatePropsType
    _callSubscriber: ()=>void
    _updateNewPostText: (newText: string)=> void
    _addPost:()=>void
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

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ActionType = AddPostActionType | UpdateNewPostTextActionType
// @ts-ignore
window.store = store