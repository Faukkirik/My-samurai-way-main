import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ArrayProfilePage} from "../../../Redux/state";


export const MyPosts = (props: ArrayProfilePage) => {

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
                {props.post.map((el)=>{
                    return(
                        <Post message={el.message} likeCount={el.likeCount} id={el.id} key={el.id}/>
                    )
                })}
            </div>
        </div>
    )
}