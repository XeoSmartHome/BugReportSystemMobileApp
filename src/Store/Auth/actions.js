import { createApiAction } from "../utils";
import { API_ROUTES } from "../../API/routes";

const signIn = (email, password) =>
    createApiAction("SIGN_IN", API_ROUTES.AUTH.SIGN_IN, {email, password});

const signUp = (firstName, lastName, email, password) =>
    createApiAction("SIGN_IN", API_ROUTES.AUTH.SIGN_UP, {firstName, lastName, email, password})

const signOut = () => (dispatch) =>
    dispatch({type: "SIGN_OUT_SUCCESS"});

export const AuthActions = {
    signIn,
    signUp,
    signOut,
};
