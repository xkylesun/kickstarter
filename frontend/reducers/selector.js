export const selectBackedProjects = (state, user) => {
    return user ? user.backedProjectIds.map(
        id => state.entities.projects[id]
    ) : [];
}

export const selectPledgeLevels = (state, project) => {
    if (project){
        if (project.pledgeLevelIds){
            return project.pledgeLevelIds.map(id => (state.entities.pledgeLevels[id]))
        } else {
            return [];
        }
    } else {
        return [];
    }
}