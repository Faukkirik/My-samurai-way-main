import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../Redux/state";
export type ArrayProfilePageState = {
    post: PostPropsType[]
    addPost: (message: string) => void
}
export const MyPosts: React.FC<ArrayProfilePageState> = (props) => {
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        props.addPost(text)
        if (newPostElement.current){
            newPostElement.current.value = ''
        }
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