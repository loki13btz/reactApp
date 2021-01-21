import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "925fb974-d424-4849-b1b3-dc019581a825" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instanse.delete(`follow/${userId}`);
    }
};

export const headerAPI = {
    getHeader() {
        return instanse.get('auth/me').then(response => {
            return response.data;
        })
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanse.get('profile/' + userId).then(response => {
            return response.data;
        })
    }
};