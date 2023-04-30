import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import {compose} from "redux";

type PathParamsType ={
    userId:  string
}


type MapStatePropsType = {
    profile: any
    status: string
}
type MapDispatchPropsType ={
    getUserProfile: (userId: number)=>void
    getStatus: (userId: number)=>void
    updateStatus: (status: string)=>void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType
class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 28303;
        }
        this.props.getUserProfile(userId)
       // setTimeout(()=>{
            this.props.getStatus(userId)
       // },1000)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}
let mapStateToProps = (store: StoreType):MapStatePropsType => {
    return {
        profile: store.profileReducer.profile,
        status: store.profileReducer.status,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)