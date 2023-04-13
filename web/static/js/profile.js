function updateUser() {
    const form = document.getElementById('profile-form');
    const curPath = window.location.pathname;
    const parts = curPath.split('/');
    const userid = parts[parts.length - 1];
    const username = form.elements.username.value;
    const expiration = form.elements.expiration.value;
    const data = {
        username: username,
        expiration: Number(expiration)
    };
    const url = `http://localhost:8080/api/users/${userid}`;
    const options = {
        method: 'PUT',
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
                    response.json();
                    throw error;
                }
                const error = new Error('Response is not OK');
                error.status = response.status;
                response.json().then(data => {
                    console.log(data);
                });
                throw error;
            }
            return;
        })
        .then(data => {
            // Check if the response status is 200
            console.log(data);
        })
        .catch(error => {
            if (error.status == 401) {
                const errorMessage = document.getElementById('bad-credentials-error');
                errorMessage.innerText = 'Username or password is wrong'
                return;
            }
            // Handle errors
            console.log(error.status);
            console.log(error.data);
            console.error('There was a problem with the fetch operation:', error);
        });
}