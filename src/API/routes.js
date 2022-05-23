export const API_ROUTES = {
    AUTH: {
        SIGN_IN: {
            url: "/auth/sign-in",
            method: "POST",
        },
        SIGN_UP: {
            url: "/auth/sign-up",
            method: "POST",
        },
    },
    BUGS: {
        GET_ALL: {
            url: "/bugs/bugs",
            method: "GET",
        },
        CREATE: {
            url: "/bugs/create-bug",
            method: "POST",
        },
    },
};
