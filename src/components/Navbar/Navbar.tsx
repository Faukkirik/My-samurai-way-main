import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="src/components">Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components">Settings</a>
            </div>
        </nav>
    )
}