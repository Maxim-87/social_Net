import React from "react";
import p from './../Dialogs.module.css';
import {messageType} from "../../../../redux/state";




export const Message = (props: messageType) => {
    return (
        <div className={p.dialog}>{props.message}</div>


    )
}
