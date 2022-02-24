import React from 'react';
import p from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={p.nav}>
            <div className={p.item}>
                <NavLink to='/profile' activeClassName={p.activeLink}> Profile </NavLink>
            </div>
            <div className={`${p.item} ${p.active}`}>
                <NavLink to='/dialogs' activeClassName={p.activeLink}> Messages </NavLink>
            </div>
            <div className={p.item}>
                <NavLink to={'/users'}> Users </NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/new' activeClassName={p.activeLink}> New </NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/music' activeClassName={p.activeLink}> Music </NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/settings' activeClassName={p.activeLink}> Settings </NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/login' activeClassName={p.activeLink}> Login </NavLink>
            </div>
        </nav>);
}