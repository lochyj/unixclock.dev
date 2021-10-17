function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function timeOut() {
    const date = new Date().getTime()
    document.getElementById("unixTime").innerHTML = date;
    await sleep(20);
    timeOut();
}

function copyTime() {
    const date = new Date().getTime()
    navigator.clipboard.writeText(date);
}

timeOut();