import React from "react";
import s from './Profile.module.css'

export const Profile =()=>{
    return(
        <div className={s.content}>
            <div>
                <img src="https://img3.badfon.ru/original/1920x1080/e/34/utro-tuman-lep-peyzazh-3038.jpg" alt="LOW"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}