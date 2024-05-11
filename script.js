const titleTime = document.querySelector("[data-time]"),
    titleDate = document.querySelector("[data-date]");


function updateDateTime() {
    let now = new Date();
    titleDate.textContent = now.toLocaleDateString("en-uk", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
    titleTime.textContent = now.toLocaleTimeString("en-uk")
}

function updateTime(hideRest = false) {
    let now = new Date();
    titleTime.textContent = now.toLocaleTimeString("en-uk")
    if (!hideRest) return
    titleDate.style.display = "none";
}

function updateDate() {
    let now = new Date();
    titleDate.textContent = now.toLocaleDateString("en-uk", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
    titleTime.style.display = "none";
}



window.addEventListener("load", e => {
    if (new URLSearchParams(window.location.search).get("time") === "") {
        updateTime(hideRest = true)
        setInterval(updateTime, 1000)
    }
    else if (new URLSearchParams(window.location.search).get("date") === "") {
        updateDate()
    }
    else {
        updateDateTime()
        setInterval(updateTime, 1000)
    }
    let meta = document.createElement("meta")
    meta.setAttribute("name", "theme-color")
    meta.setAttribute("content", getComputedStyle(document.body).getPropertyValue("--clr-bg-body"))
    document.head.appendChild(meta)
})

