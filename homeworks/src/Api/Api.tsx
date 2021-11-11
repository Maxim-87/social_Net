import axios from "axios";


const inctance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "10ef8ae6-1208-4d5f-8d59-502b969e25bb",
    }
})

export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return inctance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return inctance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return inctance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        debugger
        return inctance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return inctance.get(`auth/me`)
    }
}

