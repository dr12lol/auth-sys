const users = []

loadUsers()

form.onsubmit = handleSubmit

function handleSubmit() {
    const name = form.username.value
    const pvd = form.password.value

    for (const user of users) {
        if (name == user.username && pvd == user.password) {
            localStorage.setItem("currentUser", name)
            alert("Logged in successfully.")

            location.href = "private.html"
            return
        }
    }
    alert("Sadly the user or password doesn't match. Please try again.")
}

function loadUsers() {
    const json = localStorage.getItem("users")
    if (!json) return
    const savedUsers = JSON.parse(json)
    users.push(...savedUsers)

}

