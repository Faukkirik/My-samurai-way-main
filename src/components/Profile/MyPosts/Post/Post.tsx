import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://cdnb.artstation.com/p/assets/images/images/015/522/597/large/kittichai-reaungchaichan-razaras-dr-dota2.jpg?1548682919"
                    alt="LOW"/>
                post 1
                <span>Like</span>
            </div>
        </div>
    )
}