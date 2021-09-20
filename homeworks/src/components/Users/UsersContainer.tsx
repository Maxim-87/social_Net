import React from 'react';
import {connect} from 'react-redux';
import {Users} from "./Users";
import {RootAppStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: RootAppStoreType) => {
    const {users} = state.usersPage;
    return {
        users: users
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
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);

// export let Users = (props:any) => {
//     return <div>
//         Users return jsx
//     </div>
// }