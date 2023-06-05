import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import { logout} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps =(store: any)=>({
    isAuth: store.authReducer.isAuth,
    login: store.authReducer.login,
})
export default connect(mapStateToProps, {logout})(HeaderContainer)