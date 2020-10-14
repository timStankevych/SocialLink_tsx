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
            .then(response => {
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
        return instance.get(`profile/` + userId)
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    }
};
