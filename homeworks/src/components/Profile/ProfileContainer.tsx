import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {RootAppStoreType} from "../../redux/redux-store";
import {
    getStatus,
    getUserProfile,
    ProfileDataType,
    savePhotoThunk,
    updateStatus
} from "../../redux/profile-reducer";
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';


export type ProfilePropsType = {
    getUserProfile: (userId: number) => void
    profile:  ProfileDataType
}

type MapStateType = {
    profile: ProfileDataType
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhotoThunk: (file: File) => void
}

class ProfileContainer extends React.Component<any> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19087
        }
        this.props.getStatus(userId)
        this.props.getUserProfile(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhotoThunk={this.props.savePhotoThunk}/>
        )
    }
}

const mapStateToProps = (state: RootAppStoreType): MapStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<ComponentType>(
    connect<MapStateType, MapDispatchToPropsType, {}, RootAppStoreType>
    (mapStateToProps, {
        getUserProfile,
        updateStatus,
        getStatus,
        savePhotoThunk
    }), withRouter, withAuthRedirect)(ProfileContainer)

