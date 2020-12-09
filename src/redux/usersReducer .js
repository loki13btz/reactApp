const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [{
            id: 1,
            name: 'Ugen',
            status: 'yo',
            urlImg: 'https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg',
            followed: true,
            location: { country: 'Ukraine', city: 'Kharkiv' }
        },
        {
            id: 2,
            name: 'Sasha',
            status: 'lol',
            urlImg: 'https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg',
            followed: false,
            location: { country: 'Ukraine', city: 'Kharkiv' }
        },
        {
            id: 3,
            name: 'Dasha',
            status: 'the best',
            urlImg: 'https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg',
            followed: true,
            location: { country: 'Ukraine', city: 'Kharkiv' }
        },
        {
            id: 4,
            name: 'Anna',
            status: 'what are you want',
            urlImg: 'https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg',
            followed: false,
            location: { country: 'Ukraine', city: 'Kharkiv' }
        }
    ]
}

let usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true };
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false };
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }

        default:
            return state;

    }

};


export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReduser;