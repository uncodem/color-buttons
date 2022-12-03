function botan(col) {
    document.querySelector('body').style.backgroundColor = col;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js");
}
