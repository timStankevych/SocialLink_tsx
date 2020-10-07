import axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

 const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
         'API-KEY': '56d303f7-4b20-4c05-aca0-a27b6fa68891'
     },
 })

export const usersAPI = {
    getUsers (currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    }
}


export const deleteFollow = (uId = 11085) => {
    return instance.delete(`follow/${uId}`)
        .then(response => {
            return response.data
        })
};

export const postFollow = (uId = 11085) => {
    return instance.post(`follow/${uId}`)
        .then(response => {
            return response.data
        })
};