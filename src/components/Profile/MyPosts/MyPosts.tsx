import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const postData = [
        {id: "1", message: "Hi, how are you?", likeCount: 10},
        {id: "2", message: "It's my first post", likeCount: 12},
        {id: "3", message: "omg", likeCount: 27},
    ]
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
                {postData.map((el)=>{
                    return(
                        <Post message={el.message} likeCount={el.likeCount} key={el.id}/>
                    )
                })}
            </div>
        </div>
    )
}