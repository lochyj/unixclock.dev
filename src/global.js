function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onLoad(func) {
    document.onload = function () {
        func();
    }
}