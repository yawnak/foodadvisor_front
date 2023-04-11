function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const expiration = document.getElementById("expiration").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const data = {
        username: username,
        password: password,
        expiration: parseInt(expiration),
    };

    fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
}
