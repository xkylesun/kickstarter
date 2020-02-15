export const fetchRandom = () => {
    return $.ajax({
        method: "get",
        url: "api/projects/random"
    })
}

export const fetchProjects = (filters) => {
    return $.ajax({
        method: "get",
        url: 'api/projects',
        data: { filters },
        remove: false,
    })
};

export const fetchProject = projectId => {
    return $.ajax({
        method: "get",
        url: `api/projects/${projectId}`
    })
};

export const fetchProjectDraft = projectId => {
    return $.ajax({
        method: "get",
        url: `api/projects/${projectId}/draft`
    })
}

export const createProject = project => {
    return $.ajax({
        method: "post",
        url: `api/projects/`,
        data: { project }
    })
};

export const updateProject = (formData, projectId) => {
    return $.ajax({
        method: "patch",
        url: `api/projects/${projectId}`,
        data: formData,
        contentType: false,
        processData: false
    })
};

export const deleteProject = (projectId) => {
    return $.ajax({
        method: "delete",
        url: `api/projects/${projectId}`,
    })
};