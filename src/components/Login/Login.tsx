import React from 'react';
import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import s from "../common/FormsControls/FormsControls.module.css"

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    // @ts-ignore
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: any
}
//<InjectedFormProps<FormDataType>>
export const LoginForm: React.FC<any> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", Input, 'email', [required])}
            {createField("Password", Input, 'password', [required], {type: "password"})}
            {createField(null, Input, 'rememberMe', null, {type: "checkbox"}, "remember me")}
            {captchaUrl && <img src={captchaUrl}/> }
            {captchaUrl && createField("Symbols from image", Input, 'captcha', [required], {})}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const mapStateToProps = (state: StoreType) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login)
