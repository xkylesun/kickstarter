

export const countDays = (date) => {
    let currentDate = new Date();
    let dueDate = new Date(date);
    return Math.floor((dueDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
};

export const parseNum = (num) => {
    return num ? num.toLocaleString("en") : 0;
}