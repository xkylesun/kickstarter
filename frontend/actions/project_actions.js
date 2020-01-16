import * as ProjectUtil from "../utils/project_util"

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const APPEND_PROJECTS = "APPEND_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const REMOVE_PROJECT = "REMOVE_PROJECT"

const receiveProjects = payload => {
    return {
        type: RECEIVE_PROJECTS,
        payload
    };
};

const appendProjects = payload => {
    return {
        type: APPEND_PROJECTS,
        payload
    };
};

const receiveProject = payload => {
    return {
        type: RECEIVE_PROJECT,
        payload
    };
};

const removeProject = projectId => {
    return {
        type: REMOVE_PROJECT,
        projectId
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_PROJECT_ERRORS,
        errors
    }
}

export const fetchProjects = (filters) => dispatch => {
    return ProjectUtil.fetchProjects(filters)
        .then(
            payload => dispatch(receiveProjects(payload)),
            errors => dispatch(receiveErrors(errors))
        )
};

export const fetchMoreProjects = (filters) => dispatch => {
    return ProjectUtil.fetchProjects(filters)
        .then(
            payload => dispatch(appendProjects(payload)),
            errors => dispatch(receiveErrors(errors))
        )
};

export const fetchProject = projectId => dispatch => (
    ProjectUtil.fetchProject(projectId)
        .then(
            payload => dispatch(receiveProject(payload)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createProject = formData => dispatch => (
    ProjectUtil.createProject(formData)
        .then(
            payload => dispatch(receiveProject(payload)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const updateProject = formProject => dispatch => (
    ProjectUtil.updateProject(formProject)
        .then(
            payload => dispatch(receiveProject(payload)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const deleteProject = projectId => dispatch => (
    ProjectUtil.deleteProject(projectId)
        .then(
            projectId => dispatch(removeProject(projectId)),
            errors => dispatch(receiveErrors(errors))
        )
);


