import React from 'react';
import {UsersCPropsType} from "./UsersContainer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";


export const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}: any) => {
    const pagesCount = props.totalUsersCount / props.pageSize
    const pages = []
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {users.map((el: UsersCPropsType) => <User
                    key={el.id}
                    user={el}
                    followingInProgress={props.followingInProgress}
                    unFollow={props.unFollow}
                    follow={props.follow}
                />)}
            </div>
        </div>
    );
};