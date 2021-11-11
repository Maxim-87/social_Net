import React from "react";
import { Header } from "./Header";
import axios from "axios";
import {RootAppStoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../Api/Api";

export type HeaderContainerPropsType = {
    getAuthUserData: () => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer  extends React.Component<HeaderContainerPropsType> {
   componentDidMount() {
      this.props.getAuthUserData()
   }

   render () {

       return <Header {...this.props}/>
   }
}

const mapStateToProps = (state: RootAppStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer)