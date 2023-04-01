import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ArrayProfilePage} from "../../../Redux/state";


export const MyPosts: React.FC<ArrayProfilePage> = (props) => {
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost = () => {
        const text = newPostElement.current?.value
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {props.post.map((el) => {
                    return (
                        <Post message={el.message} likeCount={el.likeCount} id={el.id} key={el.id}/>
                    )
                })}
            </div>
        </div>
    )
}