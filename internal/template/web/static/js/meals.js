const startOffset = 0;
const defaultLimit = 20;

function initOffsetAndLimit() {
    setOffsetAndLimit(startOffset, defaultLimit);
}

function setOffsetAndLimit(offset, limit) {
    // Get the current URL
    let url = new URL(window.location.href);

    // Set the query parameter value
    url.searchParams.set("offset", offset);
    url.searchParams.set("limit", limit);

    // Create a new URL with the updated query parameter
    let newUrl = url.toString();

    // Change the URL without reloading the page
    window.history.pushState({ path: newUrl }, '', newUrl);
}

function getOffsetAndLimit() {
    // Get the query parameters from the current URL
    const queryParams = new URLSearchParams(window.location.search);
    // Get the offset and limit query parameters
    const offset = Number(queryParams.get("offset"));
    const limit = Number(queryParams.get("limit"));
    return [offset, limit];
}

function fetchMeals() {
    let [offset, limit] = getOffsetAndLimit();
    const options = {
        method: 'GET',
        credentials: 'include'
    };
    fetch(`http://localhost:8080/api/meals?offset=${offset}&limit=${limit}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const mealsList = document.getElementById('mealsList');
            mealsList.innerHTML = '';
            data.meals.forEach(meal => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `/meals/${meal.id}`;
                link.innerText = meal.name;
                listItem.appendChild(link);
                mealsList.appendChild(listItem);
            });
        })
        .catch(error => console.error(error));
}

function updatePageButtons() {
    let [offset, limit] = getOffsetAndLimit();
    if (offset <= 0) {
        document.getElementById('pageLeft').disabled = true;
    } else {
        document.getElementById('pageLeft').disabled = false;
    }
    document.getElementById('pageIndicator').innerText = `${offset + 1}-${offset + limit}`;
}

function pageDecrease() {
    let [offset,] = getOffsetAndLimit();
    setOffsetAndLimit(offset - defaultLimit, defaultLimit)
}

function pageIncrease() {
    let [offset,] = getOffsetAndLimit();
    setOffsetAndLimit(offset + defaultLimit, defaultLimit)
}