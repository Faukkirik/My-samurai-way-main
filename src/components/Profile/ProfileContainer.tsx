import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import {compose} from "redux";

type PathParamsType ={
    userId:  string
}


type MapStatePropsType = {
    profile: any
    status: string
    isAuth: boolean | null
    authorizedUserId: number | null

}
type MapDispatchPropsType ={
    getUserProfile: (userId: number)=>void
    getStatus: (userId: number)=>void
    updateStatus: (status: string)=>void
    savePhoto: (file: any)=>void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType
class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    refreshProfile(){
        let userId: number = Number(this.props.match.params.userId)
        if (!userId) {
            // @ts-ignore
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {

        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}
let mapStateToProps = (store: StoreType):MapStatePropsType => {
    return {
        profile: store.profileReducer.profile,
        status: store.profileReducer.status,
        authorizedUserId: store.authReducer.id,
        isAuth: store.authReducer.isAuth
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)