import { headerAPI } from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            {
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                };
            }

        default:
            return state;

    }

};



export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const getAuthUserData = () => (dispatch) => {
    headerAPI.getHeader().then(data => {
        if (data.resultCode === 0) {
            let { Id, email, login } = data.data;
            dispatch(setAuthUserData(Id, email, login))
        }
    })
}

export default authReducer;