import React from "react";
import p from './../Dialogs.module.css';
// import {messageType} from "../../../../redux/store";




export const Message = (props: any) => {
    return (
        <div className={p.dialog}>{props.message}</div>


    )
}
