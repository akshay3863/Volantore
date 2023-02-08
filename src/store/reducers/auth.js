import {IS_SUBMITTING_BUTTON} from "../actions/auth";

export default function auth(state = null, action) {
    if (state == null) {
        return {
            isSubmitting:false,
        };
    }

    switch (action.type) {
        case IS_SUBMITTING_BUTTON:
            return {
                ...state,
                isSubmitting:action.payload
            }
        default:
            return state;
    }
}
