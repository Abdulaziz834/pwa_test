const titleTime = document.querySelector("[data-time]"),
    titleDate = document.querySelector("[data-date]");


function updateDateTime() {
    let now = new Date();
    titleDate.textContent = now.toLocaleDateString("en-uk", {weekday: "long", year: "numeric", month: "long", day: "numeric"})
    titleTime.textContent = now.toLocaleTimeString("en-uk")
}

function updateTime() {
    let now = new Date();
    titleTime.textContent = now.toLocaleTimeString("en-uk")
}

updateDateTime()

window.addEventListener("load", e => {
    let timeUpdater = setInterval(updateTime, 1000)
})