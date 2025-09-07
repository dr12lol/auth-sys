const start = Date.now();
while (Date.now() - start < 1500) {
    // Busy wait
}
showName()


logOutBtn.onclick = logOut

function showName() {
    const name = localStorage.getItem("currentUser")

    if (!name) location.href = "."

    username.value = name

    document.body.hidden = false
}

function logOut() {
    localStorage.removeItem("currentUser")

    location.href = '.'
}
