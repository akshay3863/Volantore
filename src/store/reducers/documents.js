import {GET_ALL_DOCUMENTS} from "../actions/documents";

export default function documents(state = null, action) {
    if (state == null) {
        return {
            documentsData:null,
        };
    }

    switch (action.type) {
        case GET_ALL_DOCUMENTS:
            return {
                ...state,

            }
        default:
            return state;
    }
}
