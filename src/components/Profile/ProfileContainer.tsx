import React from "react";
import s from './Profile.module.css'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {StoreType} from "../../Redux/redux-store";

type PathParamsType ={
    userId:  string
}


type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType ={
    getUserProfile: (userId: number)=>void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType
class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (store: StoreType):MapStatePropsType => {
    return {
        profile: store.profileReducer.profile,
    }
}
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))