import { createApiAction } from "../utils";
import { API_ROUTES } from "../../API/routes";

const getBugs = () =>
    createApiAction("GET_BUGS", API_ROUTES.BUGS.GET_ALL, {});

const createBug = (title, description, status) =>
    createApiAction("CREATE_BUG", API_ROUTES.BUGS.CREATE, {title, description, status});

export const BugsActions = {
    getBugs,
    createBug,
};
