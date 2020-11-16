import axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'API-KEY': '56d303f7-4b20-4c05-aca0-a27b6fa68891'
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then((response: { data: any; }) => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post(
            `follow/${userId}`);
    },
    unFollow(userId: number) {
        return instance.delete(
            `follow/${userId}`);
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true
        });
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
