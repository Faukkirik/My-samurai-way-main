import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.onlinewebfonts.com/svg/download_333365.png" alt="LOW"/>

            <div className={`${s.loginBlock} ${s.style}`}>
                {props.isAuth ? props.login : <NavLink to={'/login'} className={s.style}>Login</NavLink>}

            </div>
        </header>
    )
}