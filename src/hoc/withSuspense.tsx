import React, {ComponentType, Suspense} from "react";




export function withSuspense<T>(Component: ComponentType<T>){
    function RedirectComponent (props: any) {
        return  <Suspense fallback={<div>Loading...</div>}>
            <Component {...props as T}/>
        </Suspense>

    }
    return RedirectComponent
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