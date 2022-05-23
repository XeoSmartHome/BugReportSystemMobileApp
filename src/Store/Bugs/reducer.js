const initialState = {
    bugs: [],
};

const bugsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_BUGS_SUCCESS":
            return { ...state, bugs: payload.bugs || [] };
        case "CREATE_BUG_SUCCESS":
            return {...state, bugs: [...state.bugs, payload.bug]}
        default:
            return state;
    }
};

export default bugsReducer;
