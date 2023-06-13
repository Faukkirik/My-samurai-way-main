import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";



export type setUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}
export type getCaptchaSuccessActionType = ReturnType<typeof getCaptchaSuccess>
export type ActionType = setUserDataActionType | getCaptchaSuccessActionType

const authPage = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}
export type authPageType = {
    id: null | number
    login: null | string
    email: null | string
    isFetching: boolean
    isAuth: boolean | null
    captchaUrl: any
}

export const authReducer = (state: authPageType = authPage, action: ActionType): authPageType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        case 'GET-CAPTCHA-URL-SUCCESS':
            return {...state, ...action.payload}
        default :
            return state
    }
}

export const setUserData = (id: number, email: string, login: string, isAuth: boolean): setUserDataActionType => {
    return {type: 'SET-USER-DATA', data: {id, email, login, isAuth}} as const
}
export const getCaptchaSuccess = (captchaUrl: any) => {
    return {type: 'GET-CAPTCHA-URL-SUCCESS', payload: {captchaUrl}} as const
}
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: Dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10){
            // @ts-ignore
            dispatch(getCaptchaUrl())
        }
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaSuccess(captchaUrl))
}
export const logout = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        // @ts-ignore
        dispatch(setUserData(null, null, null, false))
    }
}