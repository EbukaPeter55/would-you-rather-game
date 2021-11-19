export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SET_USER = 'SET_USER';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function addAnswer (answer) {
    return {
        type: SAVE_ANSWER,
        payload: answer
    }
}

