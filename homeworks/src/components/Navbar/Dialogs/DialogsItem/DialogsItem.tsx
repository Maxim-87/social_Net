import React from "react";
import {NavLink} from "react-router-dom";
import p from './../Dialogs.module.css';

export const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={p.dialogs + " " + p.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
}
