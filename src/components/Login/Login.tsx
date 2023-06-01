import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import s from "../common/FormsControls/FormsControls.module.css"

const Login = (props: any) => {
    const onSubmit=(formData: FormDataType)=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} component={Input} name={'email'} validate={[required]} />
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]} type={'password'}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={'rememberMe'}/> remember me
                </div>
                { props.error && <div className={s.formSummaryError}>
                        {props.error}
                    </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const mapStateToProps =( state: StoreType ) => ({
    isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login)
