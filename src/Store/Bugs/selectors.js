const selectAllBugs = (state) => state.bugs.bugs;
const selectBug = (bugId) => (state) => state.bugs.bugs.find((bug) => bug.id === bugId);

export const BugsSelectors = {
    selectAllBugs,
    selectBug,
};
