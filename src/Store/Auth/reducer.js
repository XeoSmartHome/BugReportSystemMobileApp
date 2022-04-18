const initialState = {
    authenticated: false,
    accessToken: null,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SIGN_IN_SUCCESS":
            return { ...state, authenticated: true, accessToken: payload.accessToken };
        case "SIGN_UP_SUCCESS":
            return { ...state, authenticated: true, accessToken: payload.accessToken };
        case "SIGN_OUT_SUCCESS":
            return { ...state, authenticated: false, accessToken: null };
        default:
            return state;
    }
};

export default authReducer;
