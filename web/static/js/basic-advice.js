function fetchMeals() {
  const options = {
    method: 'GET',
    credentials: 'include'
  };
  fetch('http://localhost:8080/api/meals/basic-advice', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const mealsList = document.getElementById('mealsList');
      data.meals.forEach(meal => {
        const listItem = document.createElement('li');
        listItem.innerText = meal.name;
        mealsList.appendChild(listItem);
      });
    })
    .catch(error => console.error(error));
}