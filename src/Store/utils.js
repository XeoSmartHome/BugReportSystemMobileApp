import { api } from "../API";

export const createApiAction = (namespace, {url, method}, args) => (dispatch) => new Promise(
    (resolve, reject) => {
        dispatch({
            type: `${namespace}_STARTED`,
            payload: null,
        });
        api.request({
            url: url,
            method: method,
            data: args || {},
            params: method === "GET" && args,
        })
            .then(({data}) => {
                dispatch({
                    type: `${namespace}_SUCCESS`,
                    payload: data,
                });
                resolve(data);
            })
            .catch((error) => {
                dispatch({
                    type: `${namespace}_ERROR`,
                    payload: error.response.data,
                });
                reject(error?.response?.data)
            });
    }
);
