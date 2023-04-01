import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img3.badfon.ru/original/1920x1080/e/34/utro-tuman-lep-peyzazh-3038.jpg" alt="LOW"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}