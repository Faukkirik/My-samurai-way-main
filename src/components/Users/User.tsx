import React from 'react';
import s from './Users.module.css'
import photosUser from "../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png"
import {NavLink} from "react-router-dom";

export const User = ({user,followingInProgress,unFollow,follow,  ...props}: any) => {
    const pagesCount = props.totalUsersCount / props.pageSize
    const pages = []
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={`profile/${user.id}`}>
                            <img src={user.photos.small ? user.photos.small : photosUser} alt="" className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                      onClick={() => {
                                          unFollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
                </div>
    );
};