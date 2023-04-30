import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}
let mapStateToForRedirectProps = (store: StoreType):MapStatePropsType => ({
    isAuth: store.authReducer.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>){

    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToForRedirectProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
 }





























// export const withAuthRedirect =(Component: ComponentType)=>{
//     class RedirectComponent extends React.Component<MapStatePropsType, MapStatePropsType>{
//         render() {
//             if (!this.props.isAuth) return <Redirect to={'/login'} />
//             return <Component {...this.props}/>
//         }
//     }
//     let ConnectedAuthRedirectComponent = connect(mapStateToForRedirectProps)(RedirectComponent)
//     return ConnectedAuthRedirectComponent
// }