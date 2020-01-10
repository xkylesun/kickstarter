export const selectBackedProjects = (state, user) => {
    return user ? user.backedProjectIds.map(
        id => state.entities.projects[id]
    ) : [];
}

export const selectPledgeLevels = (state, project) => {
    return project ? project.pledgeLevelIds.map(
        id => state.entities.pledgeLevels[id]
    ) : [];
}