import React from "react";
import {NavLink} from "react-router-dom";
import h from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";


export const Header = (props: HeaderContainerPropsType) => {
    return <header className={h.header}>
        {/*<img*/}
        {/*    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53K9N8zHCT83D67nH228rxKxkS6RMojtknA&usqp=CAU'/>*/}
        <div className={h.loginBlock}>
            {props.isAuth
                ? <div> {props.login} <button onClick={props.logout}> Logout </button> </div>
                : <NavLink to={'/login'}> Login </NavLink>}
        </div>
    </header>;
}