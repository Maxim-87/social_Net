import React from "react";
import styles from './FormsConstrols.module.css'


export const Textarea = ({ input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error && <span className={styles.formControlError}> {meta.error} </span>

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '') }>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError}
        </div>
    )
}

export const Input = ({ input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error && <span className={styles.formControlError}> {meta.error} </span>

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError}
        </div>
    )
}
