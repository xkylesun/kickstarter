import * as ProjectUtil from "../utils/project_util"

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const REMOVE_PROJECT = "REMOVE_PROJECT"

const receiveProjects = projects => {
    return {
        type: RECEIVE_PROJECTS,
        projects
    };
};

const receiveProject = project => {
    return {
        type: RECEIVE_PROJECT,
        project
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

export const fetchProjects = filters => dispatch => (
    ProjectUtil.fetchProjects(filters)
        .then(
            projects => dispatch(receiveProjects(projects)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const fetchProject = projectId => dispatch => (
    ProjectUtil.fetchProject(projectId)
        .then(
            project => dispatch(receiveProject(project)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const createProject = formProject => dispatch => (
    ProjectUtil.createProject(formProject)
        .then(
            project => dispatch(receiveProject(project)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const updateProject = formProject => dispatch => (
    ProjectUtil.updateProject(formProject)
        .then(
            project => dispatch(receiveProject(project)),
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


