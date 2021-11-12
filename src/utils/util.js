function getDateTime(pamars) {
    let date = pamars?new Date(pamars):new Date();
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let Sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let timer = Y + "-" + M + "-" + D + "    " + H + "-" + Min + "-" + Sec;
    return timer;
}

function getMonthDays(val) {
    let date = val ? val : new Date();
    var year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = new Date(year, month, 0).getDate();
    return day;
}

// 获取每个月的天数
function monthDay(year, month) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(Number(month))) {
        return 31
    } else if ([4, 6, 9, 11].includes(Number(month))) {
        return 30
    } else if (Number(month) === 2) {
        //  判断当年是否为闰年
        if (
            (Number(year) % 4 === 0 && Number(year) % 100 !== 0) ||
            Number(year) % 400 === 0
        ) {
            return 29
        } else {
            return 28
        }
    }
}


//排序
function sortNum(a, b) {
    return a - b
}


export {
    getDateTime,
    getMonthDays,
    sortNum,
    monthDay
}