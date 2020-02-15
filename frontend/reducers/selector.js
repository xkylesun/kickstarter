export const selectProjects = (state, projectIds) => { 
    let projects = state.entities.projects;
    if (Object.keys(projects).length !== 0 && projectIds) {
        return projectIds.map(id => projects[id])
    } else {
        return [];
    }
}

export const selectRewards = (state, project) => {
    if (project){
        if (project.rewardIds){
            return project.rewardIds.map(id => (state.entities.rewards[id]))
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export const selectUser = (state, userId) => {
    let users = state.entities.users;
    if (userId){
        if (users[userId]){
            return users[userId]
        } else {
            return {};
        }
    } else {
        return {};
    }
}

