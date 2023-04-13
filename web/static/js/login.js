function loginUser() {
    const form = document.getElementById('login-form');
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const data = {
        username: username,
        password: password
    };
    const url = 'http://localhost:8080/api/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    };

    fetch(url, options)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else if (!response.ok) {
                if (response.status == 401) {
                    const error = new Error('Response is not OK');
                    error.status = response.status
                    error.data = response.json();
                    throw error;
                }
            }
            return;
        })
        .then(data => {
            // Check if the response status is 200
            if (data.id) {
                // Redirect the user to their profile page
                window.location.href = `http://localhost:3000/users/${data.id}`;
            }
            else {
                throw new Error('The response did not contain a valid ID');
            }
        })
        .catch(error => {
            if (error.status == 401) {
                const errorMessage = document.getElementById('bad-credentials-error');
                errorMessage.innerText = 'Username or password is wrong'
                return;
            }
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
}