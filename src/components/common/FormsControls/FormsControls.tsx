import React from "react";
import s from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...restProps} {...input}/></FormControl>
    )
}
export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...restProps} {...input}/></FormControl>
    )
}
export const createField = (placeholder: any, component: any, name: any, validate: any, props: any={}, text:any='') => <div>
    <Field
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validate}
        {...props}
    /> {text}
</div>