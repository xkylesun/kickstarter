

export const countDays = (date) => {
    let currentDate = new Date();
    let dueDate = new Date(date);
    return Math.floor((dueDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)) || 0;
};

export const parseNum = (num) => {
    return num ? num.toLocaleString("en") : 0;
}

export const checkFilled = (eleId) => {
    let checklist = Array.from(document.getElementsByClassName(eleId));
    let completed = true;
    for (let i = 0; i < checklist.length; i++) {
        if (!checklist[i].value) {
            checklist[i].classList.add("unfilled");
            completed = false;
        }
    }
    return completed;
}

export const toggleShow = (eleId) => {
    document.getElementById(eleId).classList.add("show");
}


export const toggleHide = (eleId) => {
    document.getElementById(eleId).classList.remove("show");
}

export const scrollTo = (eleId) => {
    document.getElementById(eleId).scrollIntoView();
}