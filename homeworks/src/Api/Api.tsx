import axios from "axios";
import {loginDataType} from "../redux/auth-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "10ef8ae6-1208-4d5f-8d59-502b969e25bb",
    }
})

export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileApi object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file: any) {
        const formData = new FormData();
        formData.append('image', file)
        return instance.put(`profile/photo`, formData,{headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: loginDataType) {
        debugger
        return instance.post(`auth/login`, data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptcha() {
        debugger
        return instance.get(`security/get-captcha-url`)
    }
}



