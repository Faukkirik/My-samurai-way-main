import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType, PostPropsType} from "../../../Redux/state";
export type ArrayProfilePageState = {
    post: PostPropsType[]
    newPostText: string
    dispatch: (action: ActionType)=> void
}
export const MyPosts: React.FC<ArrayProfilePageState> = (props) => {
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'}as const)
    }
    const onPostChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value} as const)
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