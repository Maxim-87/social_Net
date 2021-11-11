import React from 'react';
import {connect} from 'react-redux';
import {RootAppStoreType} from "../../redux/redux-store";
import {
    follow,
    unFollow,
    setCurrentPage,
    UserType,
    toggleFollowingProgress, getUsers,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preload} from "../Navbar/common/Preloader/Preload";

export type PropsType = {
    users: Array<UserType>
    // setUsers: (users: Array<UserType>) => void
    follow: (arg: number) => void
    unFollow: (arg: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (arg: number) => void
    // setTotalUsersCount: (arg: number) => void
    // toggleIsFetching: (arg: boolean) => void
    getUsers: (currentPage: number, pageSize: number)=> void
    isFetching: boolean
    toggleFollowingProgress: (arg: boolean, id: number) => void
    followingInProgress: any
}


export class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preload/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootAppStoreType) => {
    const {users} = state.usersPage;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unFollow,
    setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer)

