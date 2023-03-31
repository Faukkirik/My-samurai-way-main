import React from "react";
import s from './Post.module.css'

export type PostType = {
    message: string
    likeCount: number
}
export const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://cdnb.artstation.com/p/assets/images/images/015/522/597/large/kittichai-reaungchaichan-razaras-dr-dota2.jpg?1548682919"
                    alt="LOW"/>
                {props.message}
                <div>Like {props.likeCount}</div>
            </div>
        </div>
    )
}