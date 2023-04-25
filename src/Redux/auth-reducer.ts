import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type setUserDataActionType = ReturnType<typeof setUserData>

export type ActionType = setUserDataActionType

const authPage = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}
export type authPageType = {
    id: null | number
    login: null | string
    email: null | string
    isFetching: boolean
    isAuth: boolean
}

export const authReducer =(state: authPageType = authPage, action: ActionType):authPageType=>{
    switch (action.type){
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default :
            return state
    }
}

export const setUserData =(data: {id: number, email: string, login: string})=>{
    return {type: 'SET-USER-DATA', data}as const
}
export const getAuthUserData =()=>(dispatch: Dispatch)=>{
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0 ){
                let {id, login, email} = res.data.data
                dispatch(setUserData({id, login, email}))
            }
        })
}