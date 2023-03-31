import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <Post message={"Hi, how are you?"} likeCount={10}/>
            <Post message={"It's my first post"} likeCount={15}/>
        </div>
    )
}