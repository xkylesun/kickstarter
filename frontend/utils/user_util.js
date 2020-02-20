export const fetchUser = userId => {
    return $.ajax({
        method: 'get',
        url: `api/users/${userId}`
    })
};

export const updateUser = (formData, userId) => {
    return $.ajax({
        method: "patch",
        url: `api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
};