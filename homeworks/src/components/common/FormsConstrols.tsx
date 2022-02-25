import React from "react";
import styles from './FormsConstrols.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {props.child}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error &&
        <span className={styles.formControlError}> {meta.error} </span>

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError}
        </div>
    )
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <input {...input} {...restProps}/>
}

export const createField = (placeholder: any, name: string, validators: any, component: any, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        />
        {text}
    </div>
}


