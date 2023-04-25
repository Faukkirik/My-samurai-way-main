import React from 'react';
import s from './Users.module.css'
import photosUser from "../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png"
import {UsersCPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleIsFollowing} from "../../Redux/users-reducer";


export const Users = (props: any) => {
    const pagesCount = props.totalUsersCount / props.pageSize
    const pages = []
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el: number, key: number) => {
                    return (<span className={props.currentPage === el ? s.selectedPage : ''} onClick={(e) => {
                        props.onPageChanged(el)
                    }} key={key}>{el}</span>)
                })}

            </div>
            {props.users.map((el: UsersCPropsType) => {
                return <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={`profile/${el.id}`}>
                            <img src={el.photos.small ? el.photos.small : photosUser} alt="" className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some((id: number) => id === el.id)} onClick={() => {
                                props.toggleIsFollowing(true, el.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true, headers:{
                                       "API-KEY" :"a22037d2-5c98-4d70-ad45-1b7b1066eaea"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unFollow(el.id)
                                        }
                                        props.toggleIsFollowing(false, el.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id: number) => id === el.id)} onClick={() => {
                                props.toggleIsFollowing(true, el.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true, headers:{
                                        "API-KEY" :"a22037d2-5c98-4d70-ad45-1b7b1066eaea"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                        props.toggleIsFollowing(false, el.id)
                                    })
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
                </div>
            })}
        </div>
    );
};