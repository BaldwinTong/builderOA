function getDateTime() {
    let date = new Date();
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

//排序
function sortNum(a, b) {
    return a - b
}

export {
    getDateTime,
    getMonthDays,
    sortNum
}