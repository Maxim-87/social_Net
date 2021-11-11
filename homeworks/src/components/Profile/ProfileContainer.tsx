import React from 'react';
import {Profile} from "./Profile";
import {RootAppStoreType} from "../../redux/redux-store";
import {getUserProfile, ProfileDataType} from "../../redux/profile-reducer";
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'



export type ProfilePropsType = {
    getUserProfile: (userId: number) => void
    profile: null | ProfileDataType
}

type MapStateType = {
    profile: null | ProfileDataType
    isAuth: boolean

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state: RootAppStoreType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }

};




let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// type ProfileHOCType =  connect<MapStateType, MapDispatchToPropsType, {}, RootAppStoreType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
export default connect<MapStateType, MapDispatchToPropsType, {}, RootAppStoreType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
