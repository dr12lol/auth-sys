const users = []

loadUsers()

form.onsubmit = handleSubmit

function handleSubmit() {
    const username = form.username.value
    const password = form.password.value
    const password2 = form.password2.value

    if (password !== password2) {
        alert("Passwords do not match!")
        return
    }

    addUser(username, password)
    saveUsers()

    alert("Registered successfully! Please log in, thank you! 😊")

    location.href = "login.html"
}

function addUser(username, password) {
    const user = { username, password }
    users.push(user)
}

function saveUsers() {
    const json = JSON.stringify(users)
    localStorage.setItem("users", json)
}

function loadUsers() {
    const json = localStorage.getItem("users")
    if (!json) return
    const savedUsers = JSON.parse(json)
    users.push(...savedUsers)
}