function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timeOut() {
    let date = Math.round(new Date().getTime() / 1000)
    document.getElementById("unixTime").innerHTML = date;
    await sleep(20);
    timeOut();
}

function copyTime() {
    let date = Math.round(new Date().getTime() / 1000)
    navigator.clipboard.writeText(date);
}
timeOut();