import {RootAppStoreType} from "./redux-store";

export const getUsers = (state: RootAppStoreType) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootAppStoreType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootAppStoreType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootAppStoreType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootAppStoreType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress= (state: RootAppStoreType) => {
    return state.usersPage.followingInProgress
}

