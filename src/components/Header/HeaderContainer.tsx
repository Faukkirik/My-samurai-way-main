import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0 ){
                    let {id, login, email} = res.data.data
                    this.props.setUserData({id, login, email})
                }
            })

            }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps =(store: any)=>({
    isAuth: store.authReducer.isAuth,
    login: store.authReducer.login,
})
export default connect(mapStateToProps, {setUserData})(HeaderContainer)