function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function timeOut() {
    let date = Math.round(new Date().getTime() / 1000)
    document.getElementById("unixTime").innerHTML = date;
    await sleep(99);
    timeOut();
}

function getTime() {
    const myHeaders = new Headers();
    fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Australia/Melbourne')
        .then(response => response.json())
        .then(data => console.log(data));
    try {} catch (error) {}(error => {
        console.error('There has been a problem with your fetch operation:', error);
    })
}

function copyTime() {
    let date = Math.round(new Date().getTime() / 1000)
    navigator.clipboard.writeText(date);
}
timeOut();