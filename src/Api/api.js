import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "235283ad-ee4c-43f3-b627-a58dade149b3" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
};

export const headerAPI = {
    getHeader() {
        return instanse.get('auth/me').then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instanse.get('profile/' + userId).then(response => {
            return response.data;
        });
    }
};