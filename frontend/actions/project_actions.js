import * as ProjectUtil from "../utils/project_util"

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const APPEND_PROJECTS = "APPEND_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_DRAFT = "RECEIVE_PROJECT_DRAFT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_USER_PROJECTS = "RECEIVE_USER_PROJECTS";

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

const receiveProjectDraft = payload => {
    return {
        type: RECEIVE_PROJECT_DRAFT,
        payload
    }
}

const removeProject = payload => {
    return {
        type: REMOVE_PROJECT,
        payload
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

export const fetchProject = projectId => dispatch => {
    return ProjectUtil.fetchProject(projectId)
        .then(
            payload => dispatch(receiveProject(payload)),
            errors => dispatch(receiveErrors(errors))
        )
};

export const fetchProjectDraft = projectId => dispatch => (
    ProjectUtil.fetchProjectDraft(projectId)
        .then(
            payload => dispatch(receiveProjectDraft(payload)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createProject = formData => dispatch => (
    ProjectUtil.createProject(formData)
        .then(
            null,
            errors => dispatch(receiveErrors(errors))
        )
);

export const updateProject = ({formData, projectId}) => dispatch => (
    ProjectUtil.updateProject(formData, projectId)
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

