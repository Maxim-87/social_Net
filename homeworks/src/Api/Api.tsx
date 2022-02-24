import axios from "axios";
import {loginDataType} from "../redux/auth-reducer";


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
        console.warn('Obsolete method. Please profileApi object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return inctance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return inctance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return inctance.put(`profile/status`, {status: status})
    },
    savePhoto(file: any) {
        const formData = new FormData();
        formData.append('image', file)
        return inctance.put(`profile/photo`, formData,{headers: {'Content-Type': 'multipart/form-data'}})
    }
}

export const authAPI = {
    me() {
        return inctance.get(`auth/me`)
    },
    login(data: loginDataType) {
        debugger
        return inctance.post(`auth/login`, data);
    },
    logout() {
        return inctance.delete(`auth/login`);
    }
}

export const securetyAPI = {
    getCaptcha() {
        return inctance.get(`security/get-captcha-url`)
    }
}

