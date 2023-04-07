import React, {ChangeEvent, RefObject} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostPropsType, updateNewPostText} from "../../../Redux/state";
export type ArrayProfilePageState = {
    post: PostPropsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText:(newText:string)=>void
}
export const MyPosts: React.FC<ArrayProfilePageState> = (props) => {
    const addPost = () => {
        props.addPost()
    }
    const onPostChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
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