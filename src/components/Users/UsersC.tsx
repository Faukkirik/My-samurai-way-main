import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import photosUser from "../../assets/images/24-248309_transparent-profile-clipart-font-awesome-user-circle-hd.png"
import {UserType} from "../../Redux/users-reducer";
import {Matching} from "react-redux";

// type UsersCPropsType = {
//     name?: string
//     id?: number
//     uniqueUrlName?: string | null
//     photos?: {
//         large?: string | null
//         small?: string | null
//     }
//     status?: string | null
//     followed?: boolean
// }

class UsersC extends React.Component <any>{

    constructor(props:  Matching<{ users: UserType[]; } & { follow: (id: string) => void; unFollow: (id: string) => void; setUsers: (users: UserType[]) => void; }, any>) {
        debugger
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map((el:any) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small ? el.photos.small : photosUser} alt="" className={s.photo}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unFollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
                </div>)}
            </div>
        );
    };
}

export default UsersC
// {id: "1", photoUrl: 'https://metaratings.by/upload/iblock/264/2647dc419688990544c8ba6881763615.png', followed: true,fullName: "Konstantin K", status: "I'm a try", location: {city: 'Minsk', country: 'Belarus'}},
// {id: "2", photoUrl: 'https://a-static.besthdwallpaper.com/faceless-void-arcana-claszian-apostasy-from-dota-2-wallpaper-2560x1080-104041_14.jpg', followed: true,fullName: "Daniil G", status: "I'm a boss", location: {city: 'Minsk ', country: 'Belarus'}},
// {id: "3", photoUrl: 'https://dotawallpapers.com/wallpaper/dota2hq.eu-mortred-the-phantom-assassin-3995-2560x1600.jpg', followed: false,fullName: "Artem M", status: "I'm a b-man", location: {city: 'Moscow ', country: 'Russia'}},
// {id: "4", photoUrl: 'https://adonius.club/uploads/posts/2022-02/1645263020_50-adonius-club-p-dzhaggernaut-art-61.jpg', followed: false,fullName: "Denis T", status: "I'm a track", location: {city: 'Moscow ', country: 'Russia'}},
// {id: "5", photoUrl: 'https://kartinkin.net/uploads/posts/2022-12/1669927335_1-kartinkin-net-p-dota-art-pinterest-1.jpg', followed: false,fullName: "Nikita S", status: "I'm a got of v", location: {city: 'Minsk ', country: 'Belarus'}},