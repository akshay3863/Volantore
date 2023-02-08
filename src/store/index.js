import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import auth from "./reducers/auth";
import documents from "./reducers/documents";

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    documents,
})

export default rootReducer;
