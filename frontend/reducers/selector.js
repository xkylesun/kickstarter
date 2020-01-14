export const selectBackedProjects = (state, user) => {
    return user ? user.backedProjectIds.map(
        id => state.entities.projects[id]
    ) : [];
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