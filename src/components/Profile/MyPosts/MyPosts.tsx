import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


export type ArrayProfilePageState = {
    post: PostPropsType[]
    addPost:(newPostText: string)=>void
    onPostChange:(text: string)=>void
}
export const MyPosts: React.FC<ArrayProfilePageState> = (props) => {
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
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

export function AddNewPostForm (props: any){
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)