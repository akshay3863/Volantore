import axios from "axios";
import toast from 'react-hot-toast';
import history from "../../components/history";
import cookie from "../../utils/cookie";


export const IS_SUBMITTING_BUTTON = "is_submitting_button";

export function isSubmittingButton(response) {
    return {
        type: IS_SUBMITTING_BUTTON,
        payload: response
    }
}

export function login(data = {}) {
    return (dispatch, getState) => {
        dispatch(isSubmittingButton(true));
        axios.post('/login', data)
            .then((response) => {
                dispatch(isSubmittingButton(false));
                cookie.save("jwt", response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                toast.success("Login Successfully.");
                history.push("/dashboard");
            }).catch((err) => {
            dispatch(isSubmittingButton(false));
            toast.error("Please Enter Valid Credentials");
        })
    }
}


export function signup(data = {}) {
    return (dispatch, getState) => {
        dispatch(isSubmittingButton(true));
        axios.post('/register', data)
            .then((response) => {
                dispatch(isSubmittingButton(false));
                toast.success("Signup Successfully.");
                history.push("/");
            }).catch((err) => {
            dispatch(isSubmittingButton(false));
            if (err.response.data) {
                toast.error(err.response.data.detail);
            }
        })
    }
}
