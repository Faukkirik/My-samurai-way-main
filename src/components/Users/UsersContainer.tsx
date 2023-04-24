import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow

} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

export type UsersCPropsType = {
    name?: string
    id?: number
    uniqueUrlName?: string | null
    photos: {
        large: string | null
        small: string | null
    }
    status?: string | null
    followed?: boolean
}

class UsersAPIComponent extends React.Component <any> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ?
                   <Preloader/>
                     : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}

                />
            </>
        );
    };
}

// {id: "1", photoUrl: 'https://metaratings.by/upload/iblock/264/2647dc419688990544c8ba6881763615.png', followed: true,fullName: "Konstantin K", status: "I'm a try", location: {city: 'Minsk', country: 'Belarus'}},
// {id: "2", photoUrl: 'https://a-static.besthdwallpaper.com/faceless-void-arcana-claszian-apostasy-from-dota-2-wallpaper-2560x1080-104041_14.jpg', followed: true,fullName: "Daniil G", status: "I'm a boss", location: {city: 'Minsk ', country: 'Belarus'}},
// {id: "3", photoUrl: 'https://dotawallpapers.com/wallpaper/dota2hq.eu-mortred-the-phantom-assassin-3995-2560x1600.jpg', followed: false,fullName: "Artem M", status: "I'm a b-man", location: {city: 'Moscow ', country: 'Russia'}},
// {id: "4", photoUrl: 'https://adonius.club/uploads/posts/2022-02/1645263020_50-adonius-club-p-dzhaggernaut-art-61.jpg', followed: false,fullName: "Denis T", status: "I'm a track", location: {city: 'Moscow ', country: 'Russia'}},
// {id: "5", photoUrl: 'https://kartinkin.net/uploads/posts/2022-12/1669927335_1-kartinkin-net-p-dota-art-pinterest-1.jpg', followed: false,fullName: "Nikita S", status: "I'm a got of v", location: {city: 'Minsk ', country: 'Belarus'}},

let mapStateToProps = (store: StoreType) => {
    return {
        users: store.usersReducer.users,
        pageSize: store.usersReducer.pageSize,
        totalUsersCount: store.usersReducer.totalUsersCount,
        currentPage: store.usersReducer.currentPage,
        isFetching: store.usersReducer.isFetching
    }
}
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (id: string) => {
//             dispatch(FollowAC(id))
//         },
//         unFollow: (id: string) => {
//             dispatch(UnFollowAC(id))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(SetCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(SetUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(ToggleIsFetchingAC(isFetching))
//         },
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIComponent)
