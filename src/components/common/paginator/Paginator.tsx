import React from 'react';
import s from './Paginator.module.css'


export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              onPageChanged
                          }: any) => {
    const pagesCount = totalUsersCount / pageSize
    const pages = []
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((el: number, key: number) => {
                return (<span className={currentPage === el ? s.selectedPage : ''} onClick={() => {
                    onPageChanged(el)
                }} key={key}>{el}</span>)
            })}
        </div>
    );
};