import {Redirect} from "react-router-dom";
import {RootAppStoreType} from "../redux/redux-store";
import {ComponentType} from "react";
import {connect, MapStateToProps} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootAppStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapStateToPropsForRedirect = (state: RootAppStoreType)=> ({
    isAuth: state.auth.isAuth
});


export function withAuthRedirect<T> (Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
            if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }



    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}