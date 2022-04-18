
const selectIsAuthenticated = () => (state) => state.auth.authenticated;

export const AuthSelectors = {
    selectIsAuthenticated,
};
