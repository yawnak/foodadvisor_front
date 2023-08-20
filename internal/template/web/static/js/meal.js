function getMealData() {
    const curPath = window.location.pathname;
    const parts = curPath.split('/');
    const mealid = parts[parts.length - 1];
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            document.getElementById("name").value = data.meal.name;
            document.getElementById("cooktime").value = data.meal.cooktime;
        }
    };
    xhr.open("GET", `http://localhost:8080/api/meals/${mealid}`, true);
    xhr.withCredentials = true;
    xhr.send();
}

function setLastEaten() {
    const curPath = window.location.pathname;
    const parts = curPath.split('/');
    const mealid = parts[parts.length - 1];

    const options = {
        method: 'POST',
        credentials: 'include'
    };
    fetch(`http://localhost:8080/api/users/eaten/${mealid}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error));
}