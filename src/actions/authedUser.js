export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTH_USER = 'RESET_AUTH_USER';



export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        authedUser: user
    };
}

export function resetAuthUser () {
    return {
        type: RESET_AUTH_USER,
        authedUser: null
    };
}