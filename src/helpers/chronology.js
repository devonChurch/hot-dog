function generateCurrentMillisecondTime() {

    return new Date().getTime();

}

function generateCurrentDateInstance() {

    return new Date();

}

function generateThreeLetterDayCode(dateInstance) {

    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const dayIndex = dateInstance.getDay();

    return days[dayIndex];

}

function generateThreeLetterMonthCode(dateInstance) {

    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const monthIndex = dateInstance.getMonth();

    return months[monthIndex];

}

function generateTweleveHourTime(dateInstance) {

    const twentyFourHours = dateInstance.getHours();
    const twelveHourTime = twentyFourHours > 12 ? twentyFourHours - 12 : twentyFourHours;
    const timeOfDay = twentyFourHours >= 12 ? 'pm' : 'am';
    const minutes = dateInstance.getMinutes();

    return `${twelveHourTime}:${minutes}${timeOfDay}`;

}

export default {
    generateCurrentMillisecondTime,
    generateCurrentDateInstance,
    generateThreeLetterDayCode,
    generateThreeLetterMonthCode,
    generateTweleveHourTime
};
