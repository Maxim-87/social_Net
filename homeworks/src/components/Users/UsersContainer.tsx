import React from 'react';
import {connect} from 'react-redux';
import {RootAppStoreType} from "../../redux/redux-store";
import axios from 'axios';
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    UserType,
    setTotalUsersCountAC
} from "../../redux/users-reducer";
import {Users} from "./Users";

export type PropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    follow: (arg: number) => void
    unfollow: (arg: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (arg: number) => void
    setTotalUsersCount: (arg: number) => void
}


export class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                // console.log(response)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&{this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // console.log(response)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />

    }
}

const mapStateToProps = (state: RootAppStoreType) => {
    const {users} = state.usersPage;
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: any) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);

