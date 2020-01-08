export const fetchProjects = data => (
    $.ajax({
        method: 'get',
        url: 'api/projects',
        data
    })
);

export const fetchProject = projectId => (
    $.ajax({
        method: 'get',
        url: `api/projects/${projectId}`
    })
);

export const createProject = project => (
    $.ajax({
        method: 'post',
        url: `api/projects/`,
        data: { project },
    })
);

export const updateProject = project => (
    $.ajax({
        method: 'patch',
        url: `api/projects/${project.id}`,
        data: { project },
    })
);

export const deleteProject = (projectId) => (
    $.ajax({
        method: 'delete',
        url: `api/projects/${projectId}`,
    })
);