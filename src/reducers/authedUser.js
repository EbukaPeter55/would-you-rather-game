import { SET_AUTHED_USER, RESET_AUTH_USER } from '../actions/authedUser';

export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.authedUser
        case RESET_AUTH_USER:
            return null;
        default:
            return state;
       
    }
}
