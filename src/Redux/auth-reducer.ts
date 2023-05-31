import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type setUserDataActionType = {
    type:  'SET-USER-DATA'
    data: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}
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

export const setUserData =(id: number, email: string, login: string, isAuth: boolean): setUserDataActionType=>{
    return {type: 'SET-USER-DATA', data:{id, email, login, isAuth}}as const
}
export const getAuthUserData =()=>(dispatch: Dispatch)=>{
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0 ){
                let {id, login, email} = res.data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}
export const login =(email: string, password: string, rememberMe: boolean)=>(dispatch: Dispatch)=>{
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0 ){
                // @ts-ignore
                dispatch(getAuthUserData())
            }
        })
}
export const logout =()=>(dispatch: Dispatch)=>{
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0 ){
                // @ts-ignore
                dispatch(setUserData(null, null, null, false))
            }
        })
}