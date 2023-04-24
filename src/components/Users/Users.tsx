import React from 'react';
import s from './Users.module.css'
import photosUser from "../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png"
import {UsersCPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


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
                            ? <button onClick={() => {
                                props.unFollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
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