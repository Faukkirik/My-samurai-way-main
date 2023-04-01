import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type AsdaAProps = {
    postData: Array<{id: string, message: string, likeCount: number}>
}
export const MyPosts = (props: AsdaAProps) => {

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map((el)=>{
                    return(
                        <Post message={el.message} likeCount={el.likeCount} key={el.id}/>
                    )
                })}
            </div>
        </div>
    )
}